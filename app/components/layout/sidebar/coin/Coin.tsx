import { FunctionComponent, useContext } from 'react'
import Image from 'next/image'
import ButtonGradient from '@/app/components/ui/buttons/ButtonGradient'
import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { UserContext } from '../../Layout'
import { getBuncoins } from '@/app/utils/buncoins/buncoins'

const Coin: FunctionComponent = () => {
  const user = useContext(UserContext)
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
          <Image src={'/coin.png'} alt={'coin'} width={50} height={50} />
          <p className=" text-4xl font-bold mt-3">{getBuncoins(user)}</p>
          <p>Buncoins</p>
        </div>
        <div>
          <div className=" flex gap-3 items-center">
            <span className=" py-2 px-3 border rounded-full text-xs">
              {user?.followers?.length} followers
            </span>
            <div className=" h-20 w-[1px] bg-gray"></div>
            <span className=" py-2 px-3 border rounded-full text-xs">
              {user?.following?.length} following
            </span>
          </div>
          <div className="flex items-end justify-end mt-5">
            <ButtonGradient text={'Order'} />
            <ButtonGradient text={'ProPass'} classname=" ml-5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coin
