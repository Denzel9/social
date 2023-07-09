import { FunctionComponent } from 'react'
import Like from './like/Like'
import Comment from './comment/Comment'

const ButtonGroup: FunctionComponent<{
  id: string
  liked: string[]
}> = ({ id, liked }) => {
  return (
    <div className=" text-2xl flex gap-3">
      <Like id={id} liked={liked} />
      <Comment />
      <button className=" border border-purple rounded-full py-1 px-5 transition-colors hover:bg-purpleToGrad text-base">
        Give tips
      </button>
    </div>
  )
}

export default ButtonGroup
