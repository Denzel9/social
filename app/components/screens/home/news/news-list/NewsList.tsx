import { FunctionComponent } from 'react'
import NewsItem from '../../../../../shared/post-item/PostItem'
import { useGetPost } from '@/app/hooks/post/usePost'
import { IPost } from '@/app/types/posts.types'

const NewsList: FunctionComponent = () => {
  const { post } = useGetPost()
  return (
    <ul>
      {post?.map((item: IPost) => {
        return <NewsItem key={item?.id} author={item?.author} post={item} />
      })}
    </ul>
  )
}

export default NewsList
