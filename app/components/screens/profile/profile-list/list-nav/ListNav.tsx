import ButtonEmpty from '@/app/components/ui/buttons/ButtonEmpty'
import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import CreatePost from '../create-post/CreatePost'
import { useAuth } from '@clerk/nextjs'

const ListNav: FunctionComponent<{
  type: string
  setType(type: 'POSTS' | 'GIGS'): void
  id: string
}> = ({ setType, type, id }) => {
  const [open, setOpen] = useState(false)
  const { userId } = useAuth()
  return (
    <div className=" w-full flex items-center justify-between">
      <div>
        <button
          className={classNames(
            type === 'POSTS' ? 'text-purple' : 'text-gray',
            ' border-b-4 px-8 pb-5 transition-colors'
          )}
          onClick={() => setType('POSTS')}
        >
          POSTS
        </button>

        <button
          className={classNames(
            type === 'GIGS' ? 'text-purple' : ' text-gray',
            ' border-b-4 px-8 pb-5 transition-colors'
          )}
          onClick={() => setType('GIGS')}
        >
          GIGS
        </button>
      </div>
      {userId === id && <ButtonEmpty text={'Create Post'} fn={() => setOpen(true)} />}
      <CreatePost open={open} setOpen={setOpen} />
    </div>
  )
}

export default ListNav
