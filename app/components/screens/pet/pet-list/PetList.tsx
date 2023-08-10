import { FunctionComponent } from 'react'
import PetItem from './pet-item/PetItem'
import { usePets } from '@/app/hooks/pet/usePets'
import { IPets } from '@/app/types/pets.types'

const PetList: FunctionComponent<{ data: IPets[] }> = ({ data }) => {
  return (
    <ul className=" grid grid-cols-4 gap-5 ">
      {data?.map((item) => {
        return <PetItem key={item?.id} pet={item} />
      })}
    </ul>
  )
}

export default PetList
