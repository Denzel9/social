import { FunctionComponent, use, useContext, useState } from 'react'
import ButtonGroup from './button-group/ButtonGroup'
import { ToastrContext, UserContext } from '@/app/components/layout/Layout'
import { currentDate } from '@/app/helpers/getDate'
import { IPost } from '@/app/types/posts.types'
import { useAddPost } from '@/app/hooks/post/usePost'

const CreateNewsInput: FunctionComponent = () => {
  const user = useContext(UserContext)
  const toastr = useContext(ToastrContext)
  const [type, setType] = useState<'title' | 'img'>('title')
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
    <div className=" mt-6 py-2 px-4 w-full bg-[#0D0F16] bg-opacity-25 rounded-lg flex items-center justify-between">
      {type === 'title' && (
        <input
          className=" bg-transparent w-3/4 outline-none"
          type="text"
          placeholder="What`s on your mind , Kevin ?"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
        />
      )}
      {type === 'img' && (
        <input
          className=" bg-transparent w-3/4 outline-none"
          type="text"
          placeholder="Is it image , Kevin ?"
          value={post.img}
          onChange={(e) => setPost({ ...post, img: e.target.value })}
          required
        />
      )}
      <ButtonGroup setType={setType} type={type} handleClick={handleClick} />
    </div>
  )
}

export default CreateNewsInput
