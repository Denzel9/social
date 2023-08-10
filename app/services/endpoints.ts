import axios from 'axios'

const BASE_URL = 'https://63fa0cc1473885d837d77f25.mockapi.io/api'
const ANIMAL_URL = 'https://64873f66beba6297279051db.mockapi.io'

export const axiosClassic = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const axiosPet = axios.create({
  baseURL: ANIMAL_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const allUsersAPI = () => '/users'
export const getUsersAPI = (string: string) => `/users?filter=${string}`
export const getUserByIDAPI = (string: string) => `/users/${string}`

export const allPostsAPI = () => `/posts`
export const getPostByIDAPI = (string: string) => `/posts/${string}`

export const allPetAPI = () => '/pet'
export const allSinglePetAPI = (id: string) => `/pet/${id}`
