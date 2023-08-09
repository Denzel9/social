import PostPage from '@/app/components/screens/post/PostPage'
import { PostsServices } from '@/app/services/posts.service'
import { IPost } from '@/app/types/posts.types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FunctionComponent } from 'react'

const Post: FunctionComponent<{ posts: IPost }> = ({ posts }) => {
  return posts ? <PostPage posts={posts} /> : null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await PostsServices.getPost()
  const paths = posts.map((item) => ({
    params: {
      id: item?.id,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id
  const posts = await PostsServices.getSinglePost(String(id))

  return { props: { posts } }
}

export default Post
