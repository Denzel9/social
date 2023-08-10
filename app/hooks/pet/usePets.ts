import { UserContext } from '@/app/context/UserContext'
import { PetService } from '@/app/services/pet.service'
import { IPets } from '@/app/types/pets.types'
import { useContext } from 'react'
import { useQuery } from 'react-query'

export const usePets = () => {
  const { data: pets } = useQuery<IPets[]>('pets', () => PetService.getAllPets())
  return { pets }
}

export const useUserPets = () => {
  const { user } = useContext(UserContext)
  const { data: pets, isLoading } = useQuery<IPets[]>('petsUser', () => PetService.getAllPets(), {
    select: (res) => res.filter((item) => user?.pets?.includes(item.id)),
  })
  return { pets, isLoading }
}

export const useSinglePets = (pets: string[]) => {
  const currentPet = pets?.slice(-1).join('')
  const { data: pet } = useQuery<IPets>('pets single', () => PetService.getSinglePets(currentPet), {
    enabled: !!currentPet,
  })
  return { pet }
}
