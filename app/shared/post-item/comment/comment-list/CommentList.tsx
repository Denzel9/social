import { FunctionComponent, useContext } from 'react'
import CommentItem from './comment-item/CommentItem'
import ButtonGradient from '../../../../components/ui/buttons/ButtonGradient'
import classNames from 'classnames'
import { IComment } from '@/app/types/posts.types'
import { PostContext } from '../../PostItem'

const CommentList: FunctionComponent<{
  comment: IComment[]
  img: string
}> = ({ comment, img }) => {
  const manager = useContext(PostContext)
  return (
    <div className={classNames(manager?.openComment ? ' h-[250px]' : ' h-[0px]', ' duration-300')}>
      <div
        className={classNames(
          manager?.openComment
            ? '  opacity-100 duration-500 '
            : ' opacity-0 pointer-events-none duration-100 ',
          ' mt-5 w-full  '
        )}
      >
        <ul className=" h-[200px] overflow-scroll">
          {comment?.length ? (
            comment?.map((item) => {
              return <CommentItem key={item.text} comment={item} img={img} />
            })
          ) : (
            <div>There are no comments yet</div>
          )}
        </ul>
        <ButtonGradient
          text="Close"
          classname=" mt-5"
          fn={() => manager?.setOpenComment(!manager?.openComment)}
        />
      </div>
    </div>
  )
}

export default CommentList
