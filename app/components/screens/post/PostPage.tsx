import { FunctionComponent } from 'react'
import PostItem from '@/app/shared/post-item/PostItem'
import { IPost } from '@/app/types/posts.types'

const PostPage: FunctionComponent<{ posts: IPost }> = ({ posts }) => {
  return (
    <section className=" w-full -my-5">
      <PostItem post={posts!} author={posts?.author!} />
    </section>
  )
}

export default PostPage
