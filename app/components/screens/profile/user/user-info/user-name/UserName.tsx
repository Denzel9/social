import EditButton from '@/app/components/ui/edit-button/EditButton'
import { useAuth } from '@clerk/nextjs'
import { FunctionComponent } from 'react'

interface UserNameProps {
  setTarget(open: string): void
  setOpen(open: boolean): void
  name: string
  nickname: string
  id: string
}

const UserName: FunctionComponent<UserNameProps> = ({ setOpen, setTarget, name, nickname, id }) => {
  const { userId } = useAuth()
  return (
    <div className=" text-center text-white mt-5">
      <div className=" flex justify-center gap-2">
        <div className=" text-xl">{name || 'Edit name'}</div>
        {userId === id && <EditButton setTarget={setTarget} setOpen={setOpen} name={'name'} />}
      </div>
      <div className=" flex justify-center gap-2">
        <div className=" opacity-30">{nickname || 'Edit nickname'}</div>
        {userId === id && <EditButton setTarget={setTarget} setOpen={setOpen} name={'nickname'} />}
      </div>
    </div>
  )
}

export default UserName
