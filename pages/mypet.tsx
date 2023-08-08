import PetHousePage from '@/app/components/screens/pet-house/PetHousePage'
import { UserContext } from '@/app/context/UserContext'
import { FunctionComponent, useContext } from 'react'

const Mypet: FunctionComponent = () => {
  const user = useContext(UserContext)
  console.log(user)
  return <PetHousePage data={user?.pet || []} />
}

export default Mypet
