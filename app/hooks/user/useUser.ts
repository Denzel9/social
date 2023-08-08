import { UserService } from '@/app/services/users.service'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { INotification, IUser } from '@/app/types/user.types'
import { useContext } from 'react'
import { useAuth } from '@clerk/nextjs'
import { UserContext } from '@/app/context/UserContext'

export const useAuthUser = () => {
  const { userId } = useAuth()
  const { data: user } = useQuery<IUser[]>('user', () => UserService.getUser(userId!), {
    select: (res) => Object.assign({}, ...res),
    enabled: !!userId,
    refetchInterval: 5000,
  })
  return { user }
}

export const useGetUser = (nickname: string) => {
  const { data: currentUser } = useQuery<IUser[]>(
    'user guest',
    () => UserService.getUser(nickname),
    {
      select: (res) => Object.assign({}, ...res),
      enabled: !!nickname,
      refetchInterval: 5000,
    }
  )
  return { currentUser }
}

export const useGetAllUser = () => {
  const { data: users } = useQuery<IUser[]>('guest', () => UserService.getAllUser())
  return { users }
}

export const useUpdateUser = (id: string, field: string, data: string) => {
  const queryClient = useQueryClient()
  const { mutate: update } = useMutation('update', () => UserService.updateUser(id, field, data), {
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })
  return { update }
}

export const useSubUser = (id: string) => {
  const queryClient = useQueryClient()
  const { mutateAsync: updateSub } = useMutation(
    'following',
    (data: string[]) => UserService.subUser(id, data),
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['user'] })
        queryClient.invalidateQueries({ queryKey: ['guest'] })
      },
    }
  )
  return { updateSub }
}

export const useSubsUser = (id: string) => {
  const queryClient = useQueryClient()
  const { mutateAsync: updateSubs, isLoading } = useMutation(
    'followers',
    (data: string[]) => UserService.subsUser(id, data),
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['user'] })
        queryClient.invalidateQueries({ queryKey: ['guest'] })
      },
    }
  )
  return { updateSubs, isLoading }
}

export const useNotificationUser = (id: string) => {
  const queryClient = useQueryClient()
  const user = useContext(UserContext)
  const notification: INotification[] = []
  const notificationAdd: INotification = {
    id: user?.id!,
    avatar: user?.avatar,
    name: user?.nickname,
    message: `${user?.name} has SUBSCRIBED to you`,
  }
  const notificationDelete: INotification = {
    id: user?.id!,
    avatar: user?.avatar,
    name: user?.nickname,
    message: `${user?.name} has UNSUBSCRIBED to you`,
  }
  const { mutateAsync: notificationFoll } = useMutation(
    'follow notification',
    () => {
      notification.push(notificationAdd)
      return UserService.notificationUser(id, notification)
    },
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['user'] })
        queryClient.invalidateQueries({ queryKey: ['guest'] })
      },
    }
  )
  const { mutateAsync: notificationUnfoll } = useMutation(
    'unfollow notification',
    () => {
      notification.push(notificationDelete)
      return UserService.notificationUser(id, notification)
    },
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['user'] })
        queryClient.invalidateQueries({ queryKey: ['guest'] })
      },
    }
  )
  const { mutateAsync: clearNotification } = useMutation(
    'clear notification',
    () => {
      return UserService.notificationUser(id, [])
    },
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['user'] })
        queryClient.invalidateQueries({ queryKey: ['guest'] })
      },
    }
  )
  return { notificationFoll, notificationUnfoll, clearNotification }
}
