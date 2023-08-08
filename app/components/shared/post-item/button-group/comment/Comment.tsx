import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { FunctionComponent, useContext } from 'react'
import { PostContext } from '../../PostItem'

const Comment: FunctionComponent = () => {
  const manager = useContext(PostContext)
  return (
    <button
      className=" text-2xl hover:text-purple transition-colors"
      onClick={() => manager?.setOpenComment(!manager?.openComment)}
    >
      <MaterialIcon name="MdOutlineChat" />
    </button>
  )
}

export default Comment
