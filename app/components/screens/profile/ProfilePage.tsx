import { FunctionComponent, useContext } from 'react'
import User from './user/User'
import ProfileList from './profile-list/ProfileList'

const ProfilePage: FunctionComponent = () => {
  return (
    <section className=" w-full">
      <User />
      <ProfileList />
    </section>
  )
}

export default ProfilePage
