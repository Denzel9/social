import { FunctionComponent, useContext, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import ButtonGradient from '@/app/components/ui/buttons/ButtonGradient'
import { IPost } from '@/app/types/posts.types'
import Input from './input/Input'
import { currentDate } from '@/app/helpers/getDate'
import { useAddPost } from '@/app/hooks/post/usePost'
import { ToastrContext } from '@/app/context/ToastrContext'
import { UserContext } from '@/app/context/UserContext'

const CreatePost: FunctionComponent<{
  open: boolean
  setOpen(open: boolean): void
}> = ({ open, setOpen }) => {
  const toastr = useContext(ToastrContext)
  const { user } = useContext(UserContext)
  const [post, setPost] = useState<IPost>({
    title: '',
    img: '',
    date: currentDate,
    author: {
      id: user?.id!,
      name: user?.name,
      nickname: user?.nickname,
      avatar: user?.avatar,
    },
    comment: [],
    liked: [],
  })

  const { addPost } = useAddPost(post)
  const handleClick = () => {
    if (post.title.length && post.img.length) {
      addPost()
        .then(() => setPost({ ...post, title: '', img: '' }))
        .then(() => toastr.setOpenToastr(true))
    }
  }
  return (
    <div
      onClick={() => setOpen(false)}
      className={classNames(
        open ? '  bg-opacity-30' : '  bg-opacity-0 pointer-events-none',
        ' z-30 fixed top-0 left-0 bg-navBG  w-full h-full'
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          open ? ' translate-x-0' : ' translate-x-96',
          ' p-5 opacity-100 duration-500 z-30 border-l border-purple fixed top-0 right-0 w-[350px] h-full bg-navBG text-white'
        )}
      >
        <div className=" text-3xl">Create post</div>
        <Input value={post} setValue={setPost} name={'title'} />
        <Input value={post} setValue={setPost} name={'img'} />
        <ButtonGradient text="Save" fn={handleClick} classname=" mt-5" />
      </div>
    </div>
  )
}

export default CreatePost
