import { FunctionComponent, useContext } from 'react'
import User from './user/User'
import ProfileList from './profile-list/ProfileList'
import { UserContext } from '@/app/context/UserContext'

const ProfilePage: FunctionComponent = () => {
  const user = useContext(UserContext)

  return (
    <section className=" w-full">
      <User user={user} />
      <ProfileList id={user?.authId} nickname={user?.nickname} />
    </section>
  )
}

export default ProfilePage
