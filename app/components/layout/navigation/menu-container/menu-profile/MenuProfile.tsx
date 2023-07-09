import { FunctionComponent } from 'react'
import MenuItem from '../menu/menu-item/MenuItem'
import LogoutButton from './logout-btn/LogoutButton'

const MenuProfile: FunctionComponent = () => {
  return (
    <ul className=" flex flex-col pl-4 gap-2 items-center border-t border-t-pagesBG pt-4">
      <MenuItem icon={'MdSettings'} link={'/s'} />
      <LogoutButton />
    </ul>
  )
}

export default MenuProfile
