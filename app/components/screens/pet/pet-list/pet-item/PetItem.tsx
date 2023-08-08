import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import RangeItem from '@/app/components/shared/range-item/RangeItem'
import { IPets } from '@/app/types/pets.types'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'

const PetItem: FunctionComponent<{ pet: IPets }> = ({ pet }) => {
  return (
    <Link
      href={`/pethouses/${pet?.id}`}
      className=" w-[200px] h-[240px] bg-navBG p-3 rounded-lg text-white text-left hover:scale-110 transition-transform"
    >
      <div className=" flex items-center gap-3">
        <Image
          className=" rounded-full"
          src={pet?.avatar || '/fox.png'}
          alt="pet"
          width={40}
          height={40}
        />
        <div>
          <p>{pet?.name}</p>
          <p className=" text-xs">{pet?.animal}</p>
        </div>
      </div>
      <div className=" flex items-center justify-between text-xs mt-3">
        <div>
          <div className=" text-purple">Class</div>
          <div>Basic</div>
        </div>
        <div>
          <div className=" text-purple">Level</div>
          <div>01</div>
        </div>
        <div>
          <div className=" text-purple">Compared with</div>
          <div>Any</div>
        </div>
      </div>
      <div className=" mt-3 font-light">Health</div>
      <div className=" flex items-center gap-2 mt-2">
        {pet?.health?.map((item, index) => {
          return item ? (
            <div key={index} className=" text-purple">
              <MaterialIcon key={item} name="MdOutlineFavorite" />
            </div>
          ) : (
            <MaterialIcon name="MdOutlineFavorite" />
          )
        })}
      </div>
      <RangeItem width={180} text={'Experince'} range={pet?.experince} />
    </Link>
  )
}

export default PetItem
