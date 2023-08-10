import { IUser } from '@/app/types/user.types'
import { FunctionComponent } from 'react'
import ProfileList from '../profile/profile-list/ProfileList'
import User from '../profile/user/User'
import { useAuth } from '@clerk/nextjs'

const UserPage: FunctionComponent<{ user: IUser }> = ({ user }) => {
  return (
    <section className=" w-[870px]">
      <User />
      <ProfileList />
    </section>
  )
}

export default UserPage
