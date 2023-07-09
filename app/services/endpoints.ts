import axios from 'axios'

const BASE_URL = 'https://63fa0cc1473885d837d77f25.mockapi.io/api'

export const axiosClassic = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const allUsersAPI = () => '/users'
export const getUsersAPI = (string: string) => `/users?filter=${string}`
export const getUserByIDAPI = (string: string) => `/users/${string}`

export const allPostsAPI = () => `/posts`
export const getPostByIDAPI = (string: string) => `/posts/${string}`
