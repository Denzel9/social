import { FunctionComponent, useState } from 'react'
import ListNav from './list-nav/ListNav'
import PostsList from './posts-list/PostsList'
import GigsList from './gigs-list/GigsList'
import { useGetPost } from '@/app/hooks/post/usePost'

const ProfileList: FunctionComponent<{ id: string }> = ({ id }) => {
  const [type, setType] = useState<'POSTS' | 'GIGS'>('POSTS')
  const { post } = useGetPost()
  const userPost = post?.filter((item) => item?.author?.id === id)
  return (
    <div className=" bg-navBG p-5 rounded-lg mt-8">
      <ListNav type={type} setType={setType} />
      {type === 'POSTS' && <PostsList posts={userPost!} />}
      {type === 'GIGS' && <GigsList />}
    </div>
  )
}

export default ProfileList
