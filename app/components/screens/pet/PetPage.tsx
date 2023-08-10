import { FunctionComponent } from 'react'
import PetList from './pet-list/PetList'
import { IPets } from '@/app/types/pets.types'

const PetPage: FunctionComponent<{ data: IPets[] }> = ({ data }) => {
  return (
    <div className=" w-[870px] ">
      <PetList data={data} />
    </div>
  )
}

export default PetPage
