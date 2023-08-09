import { FunctionComponent } from 'react'
import { MaterialIcon } from '../../../components/ui/icons/MaterialIcon'
import { TypeMaterialIconName } from '@/app/types/icons.types'

interface SettingItemProps {
  text: string
  icon: TypeMaterialIconName
  fn?(): void
}

const SettingItem: FunctionComponent<SettingItemProps> = ({ text, fn, icon }) => {
  return (
    <button className=" flex items-center gap-2" onClick={fn}>
      <div className=" text-xl">
        <MaterialIcon name={icon} />
      </div>
      {text}
    </button>
  )
}

export default SettingItem
