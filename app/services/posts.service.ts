import { IAuthor, IComment, IPost } from '../types/posts.types'
import { allPostsAPI, axiosClassic, getPostByIDAPI } from './endpoints'

export const PostsServices = {
  async getPost() {
    const { data: post } = await axiosClassic.get<IPost[]>(allPostsAPI())
    return post
  },
  async getSinglePost(id: string) {
    const { data: post } = await axiosClassic.get<IPost>(getPostByIDAPI(id))
    return post
  },
  async addPost(data: IPost) {
    const { data: post } = await axiosClassic.post(allPostsAPI(), data)
    return post
  },
  async addComment(id: string, data: IComment[]) {
    const { data: post } = await axiosClassic.put(getPostByIDAPI(id), { comment: data })
    return post
  },
  async addLike(id: string, data: string[]) {
    const { data: post } = await axiosClassic.put(getPostByIDAPI(id), { liked: data })
    return post
  },
  async deletePost(id: string) {
    const { data: post } = await axiosClassic.delete(getPostByIDAPI(id))
    return post
  },
  async editText(id: string, data: string) {
    const { data: post } = await axiosClassic.put(getPostByIDAPI(id), { title: data })
    return post
  },

  async editAuthor(id: string, data: IAuthor) {
    const { data: post } = await axiosClassic.put(getPostByIDAPI(id), { author: data })
    return post
  },
}
