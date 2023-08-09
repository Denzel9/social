import { PostsServices } from '@/app/services/posts.service'
import { IComment, IPost } from '@/app/types/posts.types'
import { useMutation, useQuery, useQueryClient } from 'react-query'

export const useGetPost = () => {
  const { data: post, isLoading } = useQuery<IPost[]>('post', () => PostsServices.getPost())
  return { post, isLoading }
}
export const useGetSinglePost = (id: string) => {
  const { data: post, isLoading } = useQuery<IPost>('post single', () =>
    PostsServices.getSinglePost(id)
  )
  return { post, isLoading }
}
export const useAddPost = (data: IPost) => {
  const queryClient = useQueryClient()
  const { mutateAsync: addPost } = useMutation('new post', () => PostsServices.addPost(data), {
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['post'] })
    },
  })
  return { addPost }
}

export const useAddComment = (id: string, data: IComment[]) => {
  const queryClient = useQueryClient()
  const { mutateAsync: addComment, isSuccess } = useMutation(
    'add comment',
    () => PostsServices.addComment(id, data),
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['post'] })
      },
    }
  )
  return { addComment, isSuccess }
}

export const useAddLike = (id: string) => {
  const queryClient = useQueryClient()
  const { mutateAsync: addLike } = useMutation(
    'add like',
    (data: string[]) => PostsServices.addLike(id, data),
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['post'] })
      },
    }
  )
  return { addLike }
}

export const useDeleteLike = (id: string) => {
  const queryClient = useQueryClient()
  const { mutateAsync: deletePost } = useMutation(
    'delete post',
    () => PostsServices.deletePost(id),
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['post'] })
      },
    }
  )
  return { deletePost }
}

export const useEditDesc = (id: string, text: string) => {
  const queryClient = useQueryClient()
  const { mutateAsync: editDesc } = useMutation(
    'edit desc',
    () => PostsServices.editText(id, text),
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['post'] })
      },
    }
  )
  return { editDesc }
}
