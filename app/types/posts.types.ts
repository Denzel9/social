export interface IPost {
  title: string
  img: string
  date: string
  author: IAuthor
  name?: string
  id?: string
  comment: IComment[]
  liked: string[]
}

export interface ICreatePost {
  value: IPost
  setValue(value: IPost): void
  name: string
}

export interface IAuthor {
  id: string
  name: string
  nickname: string
  avatar: string
}

export interface IComment {
  text: string
  author: string
  date: string
}
