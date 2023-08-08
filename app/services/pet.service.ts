import { IPets } from '../types/pets.types'
import { allPetAPI, allSinglePetAPI, axiosPet } from './endpoints'

export const PetService = {
  async getAllPets() {
    const { data: pet } = await axiosPet.get<IPets[]>(allPetAPI())
    return pet
  },
  async getSinglePets(id: string) {
    const { data: pet } = await axiosPet.get<IPets>(allSinglePetAPI(id))
    return pet
  },
}
