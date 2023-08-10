import { FunctionComponent, useContext } from 'react'
import HeaderBtnItem from './header-btn-item/HeaderBtnItem'
import HeaderBtnProfile from './header-btn-item/HeaderBtnProfile'
import { UserContext } from '@/app/context/UserContext'

interface HeaderBtnProps {
  notification: boolean
  setNotification(notification: boolean): void
  message: boolean
  setMessage(message: boolean): void
}

const HeaderBtn: FunctionComponent<HeaderBtnProps> = ({
  notification,
  setNotification,
  message,
  setMessage,
}) => {
  const { user, isLoading } = useContext(UserContext)
  return (
    <div className=" flex items-center gap-3">
      <span className=" text-white">{user?.nickname}</span>
      <ul className=" flex items-center gap-3">
        <HeaderBtnItem
          icon={'MdOutlineNotificationsNone'}
          open={notification}
          fn={setNotification}
          indicatr={user?.notification}
        />

        <HeaderBtnItem icon={'MdOutlineForum'} open={message} fn={setMessage} indicatr={[]} />
      </ul>
      <HeaderBtnProfile avatar={user?.avatar} isLoading={isLoading} />
    </div>
  )
}

export default HeaderBtn
