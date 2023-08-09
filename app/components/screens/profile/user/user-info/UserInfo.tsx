import EditField from '@/app/components/screens/profile/user/edit-user-field/EditUserField'
import { IUser } from '@/app/types/user.types'
import { FunctionComponent, useState } from 'react'
import Banner from '../banner/Banner'
import Avatar from './avatar/Avatar'
import FollowField from './follow-field/FollowField'
import PersonalInfo from './personal-info/PersonalInfo'
import UserName from './user-name/UserName'

const UserInfo: FunctionComponent<{ user: IUser }> = ({ user }) => {
  const [open, setOpen] = useState(false)
  const [target, setTarget] = useState('')
  return (
    <>
      <Banner banner={user?.banner} setOpen={setOpen} setTarget={setTarget} id={user?.authId} />
      <div className=" grid grid-cols-3 text-white">
        <FollowField
          id={user?.id!}
          followers={user?.followers}
          following={user?.following}
          supporters={user?.supporters}
        />
        <Avatar
          avatar={user?.avatar}
          setOpen={setOpen}
          setTarget={setTarget}
          id={user?.authId}
          pets={user?.pets}
        />
        <PersonalInfo email={user?.email} date={user?.createdAt!} />
      </div>
      <UserName
        setTarget={setTarget}
        setOpen={setOpen}
        name={user?.name}
        nickname={user?.nickname}
        id={user?.authId}
      />
      <EditField id={user?.id!} open={open} setOpen={setOpen} target={target} />
    </>
  )
}

export default UserInfo
