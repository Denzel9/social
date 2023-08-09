import { FunctionComponent, useContext } from 'react'
import FavoriteItem from './favorite-item/FavoriteItem'
import { UserContext } from '@/app/context/UserContext'
import { useGetPost } from '@/app/hooks/post/usePost'

const FavoritePosts: FunctionComponent = () => {
  const user = useContext(UserContext)
  const { post } = useGetPost()
  const userLikedPosts = post?.filter((item) => item.liked.includes(user?.nickname))

  return (
    <div className=" w-full  bg-navBG mt-5 rounded-md p-5 text-white ">
      <span className=" font-black">FAVORITE POSTS</span>
      <ul className="h-[330px] overflow-scroll">
        {userLikedPosts?.map((item) => {
          return (
            <FavoriteItem
              key={item.id}
              img={item?.img}
              author={item?.author?.nickname}
              title={item?.title}
              postId={item?.id!}
              id={user.id!}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default FavoritePosts
