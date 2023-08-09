import { FunctionComponent, createContext, useState } from 'react'
import Image from 'next/image'
import CommentField from './comment/CommentField'
import InfoCreator from './info-creator/InfoCreator'
import Liked from './liked/Liked'
import ButtonGroup from './button-group/ButtonGroup'
import { IAuthor, IPost } from '@/app/types/posts.types'
import classNames from 'classnames'
import Description from './description/Description'

interface IManager {
  openComment: boolean
  setOpenComment(open: boolean): void
  openSettingField: boolean
  setOpenSettingField(open: boolean): void
  hiddenPost: string
  sethiddenPost(open: string): void
  openEditText: boolean
  setOpenedittext(open: boolean): void
}

export const PostContext = createContext<IManager>({} as IManager)

const PostItem: FunctionComponent<{ post: IPost; author: IAuthor }> = ({ post, author }) => {
  const [openComment, setOpenComment] = useState(false)
  const [openSettingField, setOpenSettingField] = useState(false)
  const [hiddenPost, sethiddenPost] = useState('')
  const [openEditText, setOpenedittext] = useState(false)

  const manager = {
    openComment,
    setOpenComment,
    openSettingField,
    setOpenSettingField,
    hiddenPost,
    sethiddenPost,
    openEditText,
    setOpenedittext,
  }
  if (manager?.hiddenPost === post?.id)
    return (
      <div className=" w-full h-10 py-2 px-5 bg-navBG rounded-lg mt-5 text-white flex items-center justify-between">
        <div>Post hidden</div>
        <button className=" hover:text-purple transition-colors" onClick={() => sethiddenPost('')}>
          Show post
        </button>
      </div>
    )
  return (
    <PostContext.Provider value={manager}>
      <div
        className={classNames(
          hiddenPost === post?.id ? 'hidden' : 'block',
          ' w-full bg-navBG mt-5 rounded-lg text-white p-5 border-b border-purple'
        )}
      >
        <InfoCreator author={author} postId={post?.id!} />
        <Image className=" mt-6" src={post?.img || ''} alt={'post'} width={850} height={200} />
        <div className=" flex items-center justify-between mt-3">
          <ButtonGroup id={post?.id!} liked={post?.liked} />
          <Liked liked={post?.liked} />
        </div>
        {(openEditText && (
          <Description open={openEditText} text={post?.title} id={post?.id!} />
        )) || <p className=" my-6 text-sm">{post?.title}</p>}
        <CommentField id={post?.id!} comment={post?.comment} />
      </div>
    </PostContext.Provider>
  )
}

export default PostItem
