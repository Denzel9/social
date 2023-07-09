import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { INotification } from '@/app/types/user.types'
import Image from 'next/image'
import { FunctionComponent } from 'react'

const NotificationItem: FunctionComponent<{ notification: INotification }> = ({ notification }) => {
  return (
    <div className=" flex items-center gap-3 mt-3 text-sm">
      <Image
        className=" rounded-lg"
        src={notification?.avatar || '/Unknown.jpeg'}
        alt="Unknown"
        width={50}
        height={50}
      />
      <div>{notification?.message}</div>
    </div>
  )
}

export default NotificationItem
