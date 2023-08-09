import { FunctionComponent } from 'react'
import Image from 'next/image'
import { IUser } from '@/app/types/user.types'
import ButtonEmpty from '@/app/components/ui/buttons/ButtonEmpty'

const ProPassUserInfo: FunctionComponent<{ user: IUser; setType(type: 'order' | 'pro'): void }> = ({
  user,
  setType,
}) => {
  return (
    <>
      <Image
        className=" rounded-lg w-full h-1/5"
        src={user?.banner || ''}
        alt={'banner'}
        width={100}
        height={50}
      />
      <div className=" flex items-center justify-between  gap-5">
        <div className=" flex gap-5 items-center ">
          <Image
            className=" rounded-full -mt-14 ml-10 border-8 border-pagesBG z-40 relative "
            src={
              user?.avatar ||
              'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'
            }
            alt={'avatar'}
            width={130}
            height={130}
          />
          <div>
            <p className=" text-xl">{user?.name}</p>
            <p className=" opacity-70">{user?.nickname}</p>
          </div>
        </div>
        <ButtonEmpty fn={() => setType('order')} text="Order" />
      </div>
    </>
  )
}

export default ProPassUserInfo
