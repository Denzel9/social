import { FunctionComponent } from 'react'
import Logo from './logo/Logo'
import Menu from './menu-container/menu/Menu'
import MenuContainer from './menu-container/MenuContainer'

const Navigation: FunctionComponent = () => {
  return (
    <div className=" w-1/12 bg-navBG h-screen fixed left-0 top-0 bottom-0">
      <Logo />
      <MenuContainer />
    </div>
  )
}

export default Navigation
