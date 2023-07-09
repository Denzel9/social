import { IComment, IPost } from '../types/posts.types'
import { allPostsAPI, allUsersAPI, axiosClassic, getPostByIDAPI } from './endpoints'

export const PostsServices = {
  async getPost() {
    const { data: post } = await axiosClassic.get(allPostsAPI())
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
  async editText(id: string, text: string) {
    const { data: post } = await axiosClassic.put(getPostByIDAPI(id), { title: text })
    return post
  },
}
