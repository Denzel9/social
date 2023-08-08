import { FunctionComponent } from 'react'
import Image from 'next/image'
import EditButton from '@/app/components/ui/edit-button/EditButton'
import { useAuth } from '@clerk/nextjs'

const Avatar: FunctionComponent<{
  avatar: string
  setTarget(open: string): void
  setOpen(open: boolean): void
  id: string
}> = ({ avatar, setOpen, setTarget, id }) => {
  const { userId } = useAuth()
  return (
    <div className="z-10 relative">
      <Image
        className=" rounded-full m-auto -mt-16 border-8 border-pagesBG "
        src={avatar || 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'}
        alt={'avatar'}
        width={130}
        height={130}
      />
      {userId === id && (
        <div className=" text-xl bg-purple  w-9 h-9 p-2 rounded-full absolute left-36 bottom-5 opacity-40 hover:opacity-100 transition-colors">
          <EditButton setTarget={setTarget} setOpen={setOpen} name={'avatar'} />{' '}
        </div>
      )}

      <button>
        <Image
          className=" absolute right-20 bottom-8"
          src={'/fox.png'}
          alt={'fox'}
          width={40}
          height={40}
        />
      </button>
    </div>
  )
}

export default Avatar
