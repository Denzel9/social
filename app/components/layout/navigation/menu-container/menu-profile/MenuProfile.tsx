import { FunctionComponent } from 'react'
import LogoutButton from './logout-btn/LogoutButton'

const MenuProfile: FunctionComponent = () => {
  return (
    <ul className=" flex flex-col pl-4 gap-2 items-center border-t border-t-purple pt-5 mt-52">
      <LogoutButton />
    </ul>
  )
}

export default MenuProfile
