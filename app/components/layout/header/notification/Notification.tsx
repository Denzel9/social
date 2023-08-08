import classNames from 'classnames'
import { FunctionComponent, useContext } from 'react'
import NotificationItem from './notification-item/NotificationItem'
import ButtonEmpty from '@/app/components/ui/buttons/ButtonEmpty'
import { useNotificationUser } from '@/app/hooks/user/useUser'
import { UserContext } from '@/app/context/UserContext'

const Notification: FunctionComponent<{ open: boolean; setOpen(open: boolean): void }> = ({
  open,
  setOpen,
}) => {
  const user = useContext(UserContext)
  const { clearNotification } = useNotificationUser(user?.id!)
  const handleClick = () => {
    clearNotification()
    setOpen(false)
  }
  return (
    <div
      className={classNames(
        open ? ' opacity-100' : '  opacity-0 pointer-events-none',
        ' duration-500 w-screen h-screen absolute top-0 left-0 right-0'
      )}
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          open ? 'translate-x-0' : ' translate-x-96',
          ' duration-500 rounded-lg absolute top-20 right-28 bg-purple w-[350px] h-[300px] p-5 text-white'
        )}
      >
        <h1>Notification</h1>
        <ul className=" h-[200px] overflow-scroll">
          {user?.notification?.map((items) => {
            return <NotificationItem key={items.id} notification={items} />
          })}
        </ul>
        <ButtonEmpty
          classname=" text-white border border-white hover:bg-white hover:text-navBG"
          text="Clear"
          fn={handleClick}
        />
      </div>
    </div>
  )
}

export default Notification
