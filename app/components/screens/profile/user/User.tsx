import { FunctionComponent, useContext } from 'react'
import ButtonGroupProfile from './button-group/ButtonGroupProfile'
import LevelRange from './level-range/LevelRange'
import UserInfo from './user-info/UserInfo'
import { IUser } from '@/app/types/user.types'
import { useAuth } from '@clerk/nextjs'

const User: FunctionComponent<{ user: IUser }> = ({ user }) => {
  const { userId } = useAuth()
  return (
    <>
      <UserInfo user={user} />
      {userId !== user?.authId && <ButtonGroupProfile person={user} />}
      <LevelRange range={80} />
    </>
  )
}

export default User
