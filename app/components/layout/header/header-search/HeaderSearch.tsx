import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { FunctionComponent } from 'react'

const HeaderSearch: FunctionComponent = () => {
  return (
    <div className="h-10 w-96 bg-navBG rounded-lg flex items-center text-2xl text-gray pl-3">
      <MaterialIcon name="MdSearch" />
      <input
        className=" text-sm h-10 w-96 outline-none bg-navBG rounded-lg pl-2"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

export default HeaderSearch
