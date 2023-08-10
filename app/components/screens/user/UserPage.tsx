import { IUser } from '@/app/types/user.types'
import { FunctionComponent } from 'react'
import ProfileList from '../profile/profile-list/ProfileList'
import User from '../profile/user/User'

const UserPage: FunctionComponent<{ user: IUser }> = ({ user }) => {
  return (
    <section className=" w-full">
      <User />
      <ProfileList />
    </section>
  )
}

export default UserPage
