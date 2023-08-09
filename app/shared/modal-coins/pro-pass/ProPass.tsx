import ButtonEmpty from '@/app/components/ui/buttons/ButtonEmpty'
import { IUser } from '@/app/types/user.types'
import { FunctionComponent } from 'react'
import Image from 'next/image'
import Banner from '@/app/components/screens/profile/user/banner/Banner'
import ProPassCard from '../ProPassCard'
import ProPassUserInfo from './ProPassUserInfo'

const ProPass: FunctionComponent<{ user: IUser; setType(type: 'order' | 'pro'): void }> = ({
  user,
  setType,
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className=" w-2/3 h-3/4 rounded-lg border border-purple bg-pagesBG p-5 text-white"
    >
      <ProPassUserInfo user={user} setType={setType} />
      <ul className=" mt-5 w-full h-full flex  gap-5">
        <ProPassCard />
        <ProPassCard />
        <ProPassCard />
      </ul>
    </div>
  )
}

export default ProPass
