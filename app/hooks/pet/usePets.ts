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
    select: (res) => res.filter((item) => user?.pets?.includes(item.name)),
  })
  return { pets, isLoading }
}

export const useSinglePets = (name: string) => {
  const { data: pet } = useQuery<IPets[]>('pets single', () => PetService.getSinglePets(name))
  return { pet }
}
