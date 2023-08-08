import { FunctionComponent } from 'react'
import PetItem from './pet-item/PetItem'
import { usePets } from '@/app/hooks/pet/usePets'

const PetList: FunctionComponent = () => {
  const { pets } = usePets()
  return (
    <ul className=" grid grid-cols-4 gap-5 ">
      {pets?.map((item) => {
        return <PetItem key={item?.id} pet={item} />
      })}
    </ul>
  )
}

export default PetList
