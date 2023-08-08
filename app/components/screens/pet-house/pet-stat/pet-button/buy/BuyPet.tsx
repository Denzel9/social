import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { FunctionComponent } from 'react'

const BuyPet: FunctionComponent = () => {
  return (
    <button className=" w-[250px] h-[120px] bg-navBG mt-5 rounded-lg p-5 text-white text-left hover:scale-105 transition-transform">
      <div className=" text-5xl">
        <MaterialIcon name="MdOutlineMonetizationOn" />
      </div>
      <div className=" text-2xl">Buy pets</div>
    </button>
  )
}

export default BuyPet
