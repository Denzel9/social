import { FunctionComponent } from 'react'
import { menuData } from './menu.data'
import MenuItem from './menu-item/MenuItem'
import { TypeMaterialIconName } from '@/app/types/icons.types'

const Menu: FunctionComponent = () => {
  return (
    <ul className=" flex flex-col pl-4 gap-2 mt-24 mb-4 items-center">
      {menuData.map((item) => {
        return (
          <MenuItem key={item.icon} icon={item.icon as TypeMaterialIconName} link={item.link} />
        )
      })}
    </ul>
  )
}

export default Menu
