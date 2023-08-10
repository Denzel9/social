import { FunctionComponent, useContext, useState } from 'react'
import ListNav from './list-nav/ListNav'
import PostsList from './posts-list/PostsList'
import { useGetPost } from '@/app/hooks/post/usePost'
import { useAuth } from '@clerk/nextjs'
import { UserContext } from '@/app/context/UserContext'

const ProfileList: FunctionComponent = () => {
  const { user, isLoading } = useContext(UserContext)
  const [type, setType] = useState<'POSTS' | 'GIGS'>('POSTS')
  const { post } = useGetPost()
  const { userId } = useAuth()

  const userPost = post?.filter((item) => item?.author?.nickname === user?.nickname)
  const userLikedPost = post?.filter((item) => item?.liked.includes(user?.nickname))
  return (
    <div className=" bg-navBG p-5 rounded-lg mt-8">
      <ListNav type={type} setType={setType} id={user?.id!} userId={userId!} />
      {type === 'POSTS' && <PostsList posts={userPost!} />}
      {type === 'GIGS' && userId === user?.id && <PostsList posts={userLikedPost!} />}
    </div>
  )
}

export default ProfileList
