import PetInfo from '@/app/components/screens/pet-house/pet-info/PetInfo'
import PetPage from '@/app/components/screens/pet/PetPage'
import { PetService } from '@/app/services/pet.service'
import { IPets } from '@/app/types/pets.types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FunctionComponent } from 'react'

const Pet: FunctionComponent<{ data: IPets }> = ({ data }) => {
  console.log(data)

  return data ? <PetInfo pets={data} /> : null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await PetService.getAllPets()
  const paths = data.map((item) => ({
    params: { id: item.id },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id
  const data = await PetService.getSinglePets(String(id))

  return { props: { data } }
}

export default Pet
