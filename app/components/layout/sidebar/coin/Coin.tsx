import { FunctionComponent, useContext } from 'react'
import Image from 'next/image'
import ButtonGradient from '@/app/components/ui/buttons/ButtonGradient'
import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { UserContext } from '@/app/context/UserContext'
import { LeftSideContext } from '@/app/context/LeftSideContext'
import { ModalCoinsContext } from '@/app/context/ModalCoinsContext'

const Coin: FunctionComponent = () => {
  const user = useContext(UserContext)
  const { setLeftList } = useContext(LeftSideContext)
  const { openModal, setModal } = useContext(ModalCoinsContext)

  return (
    <div className=" w-full bg-navBG h-56 rounded-md p-5 text-white">
      <span className=" font-black">ALTERSKY</span>
      <div className=" float-right flex items-center gap-3">
        Online
        <i className=" text-green-700 animate-pulse">
          <MaterialIcon name="MdFiberManualRecord" />
        </i>
      </div>
      <div className=" flex justify-between items-center">
        <div className=" flex flex-col items-center mt-8 ml-3">
          <Image src="/coin.webp" alt={'coin'} width={50} height={50} />
          <p className=" text-4xl font-bold mt-3">{user?.Buncoins}</p>
          <p>Buncoins</p>
        </div>
        <div>
          <div className=" flex gap-3 items-center">
            <button
              className=" py-2 px-3 border rounded-full text-xs"
              onClick={() => setLeftList('FOLLOWERS', 'layout')}
            >
              {user?.followers?.length} followers
            </button>
            <div className=" h-20 w-[1px] bg-gray"></div>
            <button
              className=" py-2 px-3 border rounded-full text-xs"
              onClick={() => setLeftList('FOLLOWING', 'layout')}
            >
              {user?.following?.length} following
            </button>
          </div>
          <div className="flex items-end justify-end mt-5">
            <ButtonGradient fn={() => setModal('order')} text={'Order'} />
            <ButtonGradient fn={() => setModal('pro')} text={'ProPass'} classname=" ml-5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coin
