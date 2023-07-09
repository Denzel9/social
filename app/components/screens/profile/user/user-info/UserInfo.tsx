import EditField from '@/app/components/ui/edit-field/EditField'
import { IUser } from '@/app/types/user.types'
import { FunctionComponent, use, useState } from 'react'
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
      <Banner banner={user?.banner} setOpen={setOpen} setTarget={setTarget} />
      <div className=" grid grid-cols-3 text-white">
        <FollowField
          followers={user?.followers}
          following={user?.following}
          supporters={user?.supporters}
        />
        <Avatar avatar={user?.avatar} setOpen={setOpen} setTarget={setTarget} />
        <PersonalInfo email={user?.email} date={user?.createdAt!} />
      </div>
      <UserName
        setTarget={setTarget}
        setOpen={setOpen}
        name={user?.name}
        nickname={user?.nickname}
      />
      <EditField id={user?.id!} open={open} setOpen={setOpen} target={target} />
    </>
  )
}

export default UserInfo
