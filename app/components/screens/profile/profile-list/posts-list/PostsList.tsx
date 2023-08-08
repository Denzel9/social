import { FunctionComponent } from 'react'
import { IPost } from '@/app/types/posts.types'
import NewsItem from '@/app/components/shared/post-item/PostItem'

const PostsList: FunctionComponent<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <ul>
      {posts?.map((item) => {
        return <NewsItem key={item.id} post={item} author={item.author} />
      })}
    </ul>
  )
}

export default PostsList
