import PetHousePage from '@/app/components/screens/pet-house/PetHousePage'
import { IPets } from '@/app/types/pets.types'
import { FunctionComponent } from 'react'

const Pethouse: FunctionComponent<{ data: IPets }> = ({ data }) => {
  return <PetHousePage data={data} />
}

export default Pethouse
