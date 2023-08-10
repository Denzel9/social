import { FunctionComponent } from 'react'
import { useGetPost } from '@/app/hooks/post/usePost'
import { IPost } from '@/app/types/posts.types'
import PostItem from '@/app/shared/post-item/PostItem'

const NewsList: FunctionComponent = () => {
  const { post, isLoading } = useGetPost()
  return (
    <ul>
      {post?.map((item: IPost) => {
        return <PostItem key={item?.id} author={item?.author} post={item} isLoading={isLoading} />
      })}
    </ul>
  )
}

export default NewsList
