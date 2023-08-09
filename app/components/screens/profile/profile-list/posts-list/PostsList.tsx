import { FunctionComponent } from 'react'
import { IPost } from '@/app/types/posts.types'
import PostItem from '@/app/shared/post-item/PostItem'

const PostsList: FunctionComponent<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <ul>
      {posts?.map((item) => {
        return <PostItem key={item.id} post={item} author={item.author} />
      })}
    </ul>
  )
}

export default PostsList
