import { INotification, IUser } from '../types/user.types'
import { allUsersAPI, axiosClassic, getUsersAPI, getUserByIDAPI } from './endpoints'

export const UserService = {
  async addUser(profile: IUser) {
    const { data: user } = await axiosClassic.post(allUsersAPI(), profile)
    return user
  },
  async getUser(authId: string) {
    const { data: user } = await axiosClassic.get(getUsersAPI(authId))
    return user
  },
  async getAllUser() {
    const { data: user } = await axiosClassic.get<IUser[]>(allUsersAPI())
    return user
  },
  async getUserID(authId: string) {
    const { data: user } = await axiosClassic.get(getUsersAPI(authId))
    return user
  },
  async updateUser(id: string, field: string, data: string) {
    const { data: user } = await axiosClassic.put(getUserByIDAPI(id), {
      [field]: data,
    })
    return user
  },
  async subUser(id: string, data: string[]) {
    const { data: user } = await axiosClassic.put(getUserByIDAPI(id), { following: data })
    return user
  },
  async subsUser(id: string, data: string[]) {
    const { data: user } = await axiosClassic.put(getUserByIDAPI(id), { followers: data })
    return user
  },
  async notificationUser(id: string, data: INotification[]) {
    const { data: user } = await axiosClassic.put(getUserByIDAPI(id), { notification: data })
    return user
  },
  async petsUser(id: string, data: string[]) {
    const { data: user } = await axiosClassic.put(getUserByIDAPI(id), { pets: data })
    return user
  },

  async addTipsUser(id: string, data: number) {
    const { data: user } = await axiosClassic.put(getUserByIDAPI(id), { Buncoins: data })
    return user
  },
}
