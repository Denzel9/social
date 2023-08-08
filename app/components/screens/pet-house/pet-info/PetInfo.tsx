import Image from 'next/image'
import { FunctionComponent } from 'react'
import PetStat from '../pet-stat/PetStat'
import RangeItem from '@/app/components/shared/range-item/RangeItem'
import { IPets } from '@/app/types/pets.types'

const PetInfo: FunctionComponent<{ data: IPets }> = ({ data }) => {
  return (
    <div className=" w-full h-[520px] rounded-lg bg-navBG p-5 text-white">
      <div className=" text-3xl font-bold">Pet house</div>
      <div className=" flex items-start gap-24 mt-5">
        <Image
          className=" rounded-full"
          src={data?.avatar || '/fox.png'}
          alt=""
          width={200}
          height={200}
        />
        <div>
          <div className=" text-2xl">{data?.name}</div>
          <div className=" text-sm">{data?.animal}</div>
          <div className=" text-xs opacity-70 my-5 w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem por incidi
            dunt ut labore et dolore magna aliqua.
          </div>
          <RangeItem width={500} text={'Experince'} range={data?.experince} />
        </div>
      </div>
      <PetStat stats={data?.stats} range={data?.ranges} />
    </div>
  )
}

export default PetInfo
