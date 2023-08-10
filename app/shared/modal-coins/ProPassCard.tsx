import ButtonGradient from '@/app/components/ui/buttons/ButtonGradient'
import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import Image from 'next/image'
import { FunctionComponent } from 'react'

import razor from '@/public/razor.png'

const ProPassCard: FunctionComponent = () => {
  return (
    <div className=" h-3/5 hover:scale-110 transition-all w-1/3 rounded-lg  p-5 bg-navBG text-white hover:bg-gradient-to-b from-purple to-purpleToGrad">
      <div className=" flex items-center justify-between">
        <div>
          <p>Basic</p>
          <p>$2 /month</p>
        </div>
        <Image
          className="p-2 w-10 h-10 rounded-full bg-pagesBG"
          src={razor}
          alt="razor"
          width={20}
          height={20}
        />
      </div>
      <p className=" text-xs mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <ul className=" mt-5">
        <li className=" flex items-center gap-3">
          <MaterialIcon name="MdOutlineShield" />
          <p>Lorem ipsum dolor</p>
        </li>
        <li className=" flex items-center gap-3">
          <MaterialIcon name="MdOutlineShield" />
          <p>Lorem ipsum dolor</p>
        </li>
        <li className=" flex items-center gap-3">
          <MaterialIcon name="MdOutlineShield" />
          <p>Lorem ipsum dolor</p>
        </li>
        <li className=" flex items-center gap-3">
          <MaterialIcon name="MdOutlineShield" />
          <p>Lorem ipsum dolor</p>
        </li>
      </ul>
      <ButtonGradient classname=" mt-5" text="Buy Now" />
    </div>
  )
}

export default ProPassCard
