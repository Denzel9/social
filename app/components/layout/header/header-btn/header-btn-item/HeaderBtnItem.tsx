import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { TypeMaterialIconName } from '@/app/types/icons.types'
import { INotification } from '@/app/types/user.types'
import { FunctionComponent } from 'react'

const HeaderBtnItem: FunctionComponent<{
  icon: TypeMaterialIconName
  open: boolean
  fn(open: boolean): void
  indicatr: INotification[]
}> = ({ icon, fn, open, indicatr }) => {
  return (
    <button
      className=" relative w-12 h-12 bg-navBG rounded-lg text-gray hover:text-purple transition-colors text-3xl p-2"
      onClick={() => fn(!open)}
    >
      {indicatr?.length ? (
        <div className=" absolute top-2 right-2 animate-bounce rounded-full w-2 h-2 bg-red-700"></div>
      ) : (
        ''
      )}
      <MaterialIcon name={icon} />
    </button>
  )
}

export default HeaderBtnItem
