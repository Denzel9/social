import { FunctionComponent, useContext } from 'react'
import ButtonGroupProfile from './button-group/ButtonGroupProfile'
import LevelRange from './level-range/LevelRange'
import UserInfo from './user-info/UserInfo'
import { useAppSelector } from '@/app/hooks/useSelector'
import { IUser } from '@/app/types/user.types'

const User: FunctionComponent<{ user: IUser }> = ({ user }) => {
  const userID = useAppSelector((state) => state.user.authId)
  return (
    <div>
      <UserInfo user={user} />
      {userID !== user?.authId && <ButtonGroupProfile />}
      <LevelRange range={80} />
    </div>
  )
}

export default User
