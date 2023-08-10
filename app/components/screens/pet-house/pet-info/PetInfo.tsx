import Image from 'next/image'
import { FunctionComponent, useContext } from 'react'
import PetStat from '../pet-stat/PetStat'
import RangeItem from '@/app/shared/range-item/RangeItem'
import { IPets } from '@/app/types/pets.types'
import ButtonEmpty from '@/app/components/ui/buttons/ButtonEmpty'
import { UserContext } from '@/app/context/UserContext'
import { useAddPetsUser, useUpdatePets } from '@/app/hooks/user/useUser'
import { usePathname } from 'next/navigation'

const PetInfo: FunctionComponent<{ pets: IPets }> = ({ pets }) => {
  const { user } = useContext(UserContext)
  const path = usePathname()
  const currentPets = user?.pets.indexOf(pets?.id)
  const { handleClick } = useUpdatePets(user?.id!, currentPets)
  const { buyPets, isSuccess } = useAddPetsUser()

  return (
    <div className=" w-full h-[520px] rounded-lg bg-navBG p-5 text-white mb-5">
      {path === '/mypet' ? (
        <ButtonEmpty
          fn={handleClick}
          classname=" float-right z-10 relative"
          text={currentPets === user?.pets?.length - 1 ? 'Selected' : 'Select'}
        />
      ) : (
        <ButtonEmpty
          fn={() => buyPets(pets.id)}
          classname=" float-right z-10 relative"
          text={user?.pets?.includes(pets.id) ? 'Purchased' : 'Buy'}
        />
      )}
      <div className=" flex items-start gap-24 mt-5">
        <Image
          className=" rounded-full"
          src={pets?.avatar || '/fox.png'}
          alt="pets"
          width={200}
          height={200}
        />
        <div>
          <div className=" text-2xl">{pets?.name}</div>
          <div className=" text-sm">{pets?.animal}</div>
          <div className=" text-xs opacity-70 my-5 w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem por incidi
            dunt ut labore et dolore magna aliqua.
          </div>
          <RangeItem width={500} text={'Experince'} range={pets?.experince} />
        </div>
      </div>
      <PetStat stats={pets?.stats} range={pets?.ranges} />
    </div>
  )
}

export default PetInfo
