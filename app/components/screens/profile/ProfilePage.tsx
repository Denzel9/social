import { FunctionComponent, useContext, useState } from 'react'
import User from './user/User'
import ProfileList from './profile-list/ProfileList'
import { UserContext } from '../../layout/Layout'

const ProfilePage: FunctionComponent = () => {
  const user = useContext(UserContext)

  return (
    <div>
      <User user={user} />
      <ProfileList id={user?.id!} />
    </div>
  )
}

export default ProfilePage
