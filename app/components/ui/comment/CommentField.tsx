import ButtonGradient from '@/app/components/ui/buttons/ButtonGradient'
import { FunctionComponent, useContext, useState } from 'react'
import Image from 'next/image'
import { UserContext } from '../../layout/Layout'
import { useAddComment } from '@/app/hooks/post/usePost'
import { currentDate } from '@/app/helpers/getDate'
import { IComment } from '@/app/types/posts.types'
import CommentList from './comment-list/CommentList'

interface CommentFieldProps {
  id: string
  comment: IComment[]
}

const CommentField: FunctionComponent<CommentFieldProps> = ({ id, comment }) => {
  const user = useContext(UserContext)

  const [data, setData] = useState<IComment>({
    text: '',
    author: user?.nickname,
    date: currentDate,
  })

  const newComment: IComment[] = comment

  const { addComment, isSuccess } = useAddComment(id, newComment)

  const handleClick = () => {
    if (data.text.length) {
      newComment.push(data)
      addComment()
      setData({ ...data, text: '' })
    }
  }
  return (
    <>
      <div className=" flex items-center">
        <Image
          className="rounded-full "
          src={user?.avatar || '/Unknown.jpeg'}
          alt={'avatar'}
          width={40}
          height={40}
        />
        <div className=" ml-3 rounded-lg w-full h-10 bg-pagesBG flex justify-between">
          <input
            className=" bg-transparent w-2/3 px-4 outline-none"
            type="text"
            placeholder={isSuccess ? 'Comment added... Again?' : 'Post a comment..'}
            value={data.text}
            onChange={(e) => setData({ ...data, text: e.target.value })}
          />
          <ButtonGradient text={'Post'} fn={handleClick} />
        </div>
      </div>
      <CommentList comment={comment} img={user?.avatar} />
    </>
  )
}

export default CommentField
