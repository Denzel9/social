import { PetService } from '@/app/services/pet.service'
import { IPets } from '@/app/types/pets.types'
import { useQuery } from 'react-query'

export const usePets = () => {
  const { data: pets } = useQuery<IPets[]>('pets', () => PetService.getAllPets())
  return { pets }
}
