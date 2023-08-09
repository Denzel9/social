import { IPets } from '../types/pets.types'
import { allPetAPI, allSinglePetAPI, axiosPet } from './endpoints'

export const PetService = {
  async getAllPets() {
    const { data: pet } = await axiosPet.get<IPets[]>(allPetAPI())
    return pet
  },
  async getSinglePets(name: string) {
    const { data: pet } = await axiosPet.get<IPets[]>(allSinglePetAPI(name))
    return pet
  },
}
