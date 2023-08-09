import { IPets } from './pets.types'

export interface IUser {
  id?: string
  email: string
  authId: string
  avatar: string
  banner: string
  name: string
  createdAt?: string
  nickname: string
  followers: string[]
  following: string[]
  supporters: string[]
  notification: INotification[]
  liked: ILiked[]
  Buncoins: number
  pets: string[]
}

export interface IAuth {
  email: string
  password: string
}

export interface INotification {
  avatar: string
  name: string
  id?: string
  message: string
}

export interface ILiked {
  id: string
  img: string
  title: string
  author: string
  postId: string
}
