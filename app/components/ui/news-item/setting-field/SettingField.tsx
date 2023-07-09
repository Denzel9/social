import { FunctionComponent, useContext, useState } from 'react'
import { MaterialIcon } from '../../icons/MaterialIcon'
import classNames from 'classnames'
import { PostContext } from '../NewsItem'
import SettingItem from './setting-item/SettingItem'
import { useDeleteLike } from '@/app/hooks/post/usePost'

const SettingField: FunctionComponent<{ postId: string; authorId: string; userId: string }> = ({
  postId,
  authorId,
  userId,
}) => {
  const manager = useContext(PostContext)
  const { deletePost } = useDeleteLike(postId)

  const setHidden = () => {
    manager?.sethiddenPost(postId)
    manager?.setOpenSettingField(false)
  }

  const setEditText = () => {
    manager?.setOpenedittext(true)
    manager?.setOpenSettingField(false)
  }

  return (
    <div className=" relative">
      <button
        className=" text-2xl"
        onClick={() => manager?.setOpenSettingField(!manager.openSettingField)}
      >
        <MaterialIcon name="MdLinearScale" />
      </button>

      <div
        className={classNames(
          manager?.openSettingField ? 'block' : ' hidden',
          ' absolute w-40 bg-purple right-0 rounded-lg p-3'
        )}
      >
        <SettingItem text={'Hidden post'} fn={setHidden} icon={'MdHideSource'} />
        <SettingItem text={'Add to favorite'} icon={'MdOutlineStarBorderPurple500'} />
        {userId === authorId && (
          <SettingItem text={'Edit text'} fn={setEditText} icon={'MdEditDocument'} />
        )}
        {userId === authorId && (
          <SettingItem
            text={'delete post'}
            fn={() => deletePost()}
            icon={'MdOutlineStarBorderPurple500'}
          />
        )}
      </div>
    </div>
  )
}

export default SettingField
