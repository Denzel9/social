import PetHousePage from '@/app/components/screens/pet-house/PetHousePage'
import PetPage from '@/app/components/screens/pet/PetPage'
import { usePets } from '@/app/hooks/pet/usePets'
import { FunctionComponent } from 'react'

const Pet: FunctionComponent = () => {
  const { pets } = usePets()
  return <PetPage data={pets!} />
}

export default Pet
