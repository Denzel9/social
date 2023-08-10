import EditField from '@/app/components/screens/profile/user/edit-user-field/EditUserField'
import { FunctionComponent, useContext, useState } from 'react'
import Banner from '../banner/Banner'
import Avatar from './avatar/Avatar'
import FollowField from './follow-field/FollowField'
import PersonalInfo from './personal-info/PersonalInfo'
import UserName from './user-name/UserName'
import { UserContext } from '@/app/context/UserContext'
import { useGetUser } from '@/app/hooks/user/useUser'
import { LeftSideContext } from '@/app/context/LeftSideContext'

const UserInfo: FunctionComponent = () => {
  const { user, isLoading } = useContext(UserContext)
  const [open, setOpen] = useState(false)
  const [target, setTarget] = useState('')
  const { currentUser, path } = useGetUser()
  const { setLeftList } = useContext(LeftSideContext)
  console.log(currentUser)
  return path ? (
    <>
      <Banner
        banner={currentUser?.banner!}
        setOpen={setOpen}
        setTarget={setTarget}
        id={currentUser?.authId!}
        isLoading={isLoading}
      />
      <div className=" grid grid-cols-3 text-white">
        <FollowField
          id={currentUser?.id!}
          followers={currentUser?.followers!}
          following={currentUser?.following!}
          supporters={currentUser?.supporters!}
          setLeftList={(type: string) => setLeftList(type, currentUser!)}
        />
        <Avatar
          avatar={currentUser?.avatar!}
          setOpen={setOpen}
          setTarget={setTarget}
          id={currentUser?.authId!}
          pets={currentUser?.pets!}
          isLoading={isLoading}
        />
        <PersonalInfo email={currentUser?.email!} date={currentUser?.createdAt!} />
      </div>
      <UserName
        setTarget={setTarget}
        setOpen={setOpen}
        name={currentUser?.name!}
        nickname={currentUser?.nickname!}
        id={currentUser?.authId!}
      />
      <EditField id={currentUser?.id!} open={open} setOpen={setOpen} target={target} />
    </>
  ) : (
    <>
      <Banner
        banner={user?.banner}
        setOpen={setOpen}
        setTarget={setTarget}
        id={user?.authId}
        isLoading={isLoading}
      />
      <div className=" grid grid-cols-3 text-white">
        <FollowField
          id={user?.id!}
          followers={user?.followers}
          following={user?.following}
          supporters={user?.supporters}
          setLeftList={(type: string) => setLeftList(type, user)}
        />
        <Avatar
          avatar={user?.avatar}
          setOpen={setOpen}
          setTarget={setTarget}
          id={user?.authId}
          pets={user?.pets}
          isLoading={isLoading}
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
