import { UserService } from '@/app/services/users.service'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { INotification, IUser } from '@/app/types/user.types'
import { use, useContext } from 'react'
import { useAuth } from '@clerk/nextjs'
import { UserContext } from '@/app/context/UserContext'
import { usePathname } from 'next/navigation'

export const useAuthUser = () => {
  const { userId } = useAuth()
  const { data: user, isLoading } = useQuery<IUser[]>('user', () => UserService.getUser(userId!), {
    select: (res) => Object.assign({}, ...res),
    enabled: !!userId,
    refetchInterval: 5000,
  })
  return { user, isLoading }
}

export const useGetUserById = (id: string) => {
  const { data: user } = useQuery<IUser>('user by id', () => UserService.getUser(id))
  return { user }
}

export const useGetUser = () => {
  const path = usePathname()?.split('/')[2]
  const { data: currentUser } = useQuery('user guest', () => UserService.getUser(path!), {
    select: (res) => Object.assign({}, ...res) as IUser,
    enabled: !!path,
    refetchInterval: 5000,
  })
  return { currentUser, path }
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
  const { user } = useContext(UserContext)
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

export const useUpdatePets = (id: string, target: number) => {
  const queryClient = useQueryClient()
  const { user } = useContext(UserContext)

  const handleClick = () => {
    const selected = user?.pets.splice(target, 1)
    user?.pets?.push(...selected!)
    select(user?.pets)
  }

  const { mutate: select } = useMutation(
    'pets select',
    (data: string[]) => UserService.petsUser(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['user'] })
        queryClient.invalidateQueries({ queryKey: ['petsUser'] })
      },
    }
  )
  return { handleClick }
}

export const useUpdateTipsUser = (id: string, person: IUser, data: number) => {
  const queryClient = useQueryClient()

  const updateTips = person?.Buncoins! + data
  const { mutate: update } = useMutation(
    'update tips',
    () => UserService.addTipsUser(id, updateTips),
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['user by id'] })
      },
    }
  )
  return { update }
}
