import { IComment } from '@/app/types/posts.types'
import Image from 'next/image'
import { FunctionComponent } from 'react'

const CommentItem: FunctionComponent<{ comment: IComment; img: string }> = ({ comment, img }) => {
  return (
    <div className=" w-full border-b border-purple flex items-center justify-between p-3">
      <div className=" flex items-center gap-3">
        <Image
          className=" rounded-full"
          src={img || '/Unknown.jpeg'}
          alt="person"
          width={30}
          height={30}
        />
        <div>{comment.author}</div>
        <div className=" ml-10">{comment.text}</div>
      </div>
      <div>{comment.date}</div>
    </div>
  )
}

export default CommentItem
