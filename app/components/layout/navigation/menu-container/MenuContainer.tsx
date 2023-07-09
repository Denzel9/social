import { FunctionComponent } from 'react'
import Menu from './menu/Menu'
import MenuProfile from './menu-profile/MenuProfile'

const MenuContainer: FunctionComponent = () => {
  return (
    <div>
      <Menu />
      <MenuProfile />
    </div>
  )
}

export default MenuContainer
