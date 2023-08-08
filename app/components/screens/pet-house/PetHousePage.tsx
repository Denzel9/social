import { FunctionComponent } from 'react'
import PetInfo from './pet-info/PetInfo'
import PetButton from './pet-stat/pet-button/PetButton'
import { IPets } from '@/app/types/pets.types'
import Link from 'next/link'
import ButtonGradient from '../../ui/buttons/ButtonGradient'

const PetHousePage: FunctionComponent<{ data: IPets }> = ({ data }) => {
  if (!data?.name?.length)
    return (
      <div className=" w-[870px] bg-navBG rounded-lg p-5 text-white text-3xl">
        You don`t have pets yet
        <Link className=" block mt-5 text-xl" href={'/pet'}>
          <ButtonGradient text={'Buy now'} />
        </Link>
      </div>
    )

  return (
    <div className=" w-[870px] ">
      <PetInfo data={data} />
      <PetButton />
    </div>
  )
}

export default PetHousePage
