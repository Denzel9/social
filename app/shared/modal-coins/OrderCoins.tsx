import ButtonEmpty from '@/app/components/ui/buttons/ButtonEmpty'
import { FunctionComponent } from 'react'
import CoinsItem from './CoinsItem'
import Image from 'next/image'
import { IUser } from '@/app/types/user.types'

import coin from '@/public/coin.jpg'

const OrderCoins: FunctionComponent<{ user: IUser; setType(type: 'order' | 'pro'): void }> = ({
  user,
  setType,
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className=" w-2/3 h-3/4 rounded-lg border border-purple bg-pagesBG p-5 text-white"
    >
      <div className="  h-1/5 w-full rounded-lg bg-navBG flex gap-5 p-5 items-center justify-between">
        <div className=" flex items-center gap-5">
          <Image className=" rounded-full" src={coin} alt={'coin'} width={50} height={50} />
          <div>
            <p className=" font-black text-2xl">{user?.Buncoins}</p>
            <p className=" font-light">Buncoin Balance</p>
          </div>
        </div>
        <ButtonEmpty fn={() => setType('pro')} text="ProPass" />
      </div>
      <div className=" grid grid-cols-3 mt-8 gap-5">
        <CoinsItem />
        <CoinsItem />
        <CoinsItem />
        <CoinsItem />
        <CoinsItem />
        <CoinsItem />
      </div>
    </div>
  )
}

export default OrderCoins
