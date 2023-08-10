import { FunctionComponent, useContext } from 'react'
import ButtonGroupProfile from './button-group/ButtonGroupProfile'
import LevelRange from './level-range/LevelRange'
import UserInfo from './user-info/UserInfo'

const User: FunctionComponent = () => {
  return (
    <>
      <UserInfo />
      <ButtonGroupProfile />
      <LevelRange range={80} />
    </>
  )
}

export default User
