import { TypeMaterialIconName } from '@/app/types/icons.types'
import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
  const IconComponent = MaterialIcons[name]
  return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}
