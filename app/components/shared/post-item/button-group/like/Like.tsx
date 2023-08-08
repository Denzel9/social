import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { UserContext } from '@/app/context/UserContext'
import { useAddLike } from '@/app/hooks/post/usePost'
import classNames from 'classnames'
import { FunctionComponent, useContext, useState } from 'react'

const Like: FunctionComponent<{ id: string; liked: string[] }> = ({ id, liked }) => {
  const user = useContext(UserContext)
  let newLiked = liked
  const handleAdd = () => {
    if (!liked.includes(user?.nickname)) {
      newLiked.push(user?.nickname)
      addLike(newLiked)
    }
  }
  const handleDelete = () => {
    if (liked.includes(user?.nickname)) {
      newLiked = liked.filter((item) => item !== user?.nickname)
      addLike(newLiked)
    }
  }
  const { addLike } = useAddLike(id)
  return (
    <button
      className={classNames(
        liked?.includes(user?.nickname) ? ' text-purple hover:text-white' : '',
        ' text-2xl hover:text-purple transition-colors'
      )}
      onClick={liked.includes(user?.nickname) ? handleDelete : handleAdd}
    >
      <MaterialIcon name="MdOutlineFavoriteBorder" />
    </button>
  )
}

export default Like
