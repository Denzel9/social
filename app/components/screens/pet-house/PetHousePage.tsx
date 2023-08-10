import { FunctionComponent } from 'react'
import PetInfo from './pet-info/PetInfo'
import Link from 'next/link'
import ButtonGradient from '../../ui/buttons/ButtonGradient'
import { useUserPets } from '@/app/hooks/pet/usePets'
import { IPets } from '@/app/types/pets.types'

const PetHousePage: FunctionComponent = () => {
  const { pets, isLoading } = useUserPets()

  return isLoading ? (
    <h1 className=" text-white w-full text-4xl">Loading...</h1>
  ) : !pets?.length ? (
    <div className=" w-[870px] bg-navBG rounded-lg p-5 text-white text-3xl">
      You don`t have pets yet
      <Link className=" block mt-5 text-xl" href={'/pet'}>
        <ButtonGradient text={'Buy now'} />
      </Link>
    </div>
  ) : (
    <div className=" w-full ">
      <div className=" text-3xl font-bold text-white -mt-14 z-40 relative mb-5">Pet house</div>
      {pets?.map((item) => {
        return <PetInfo key={item?.id} pets={item} />
      })}
    </div>
  )
}

export default PetHousePage
