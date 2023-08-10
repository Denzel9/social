import { LeftSideContext } from '@/app/context/LeftSideContext'
import { useGetUser } from '@/app/hooks/user/useUser'
import { FunctionComponent, useContext } from 'react'

const FollowField: FunctionComponent<{
  followers: string[]
  following: string[]
  supporters: string[]
  id: string
  setLeftList(type: string): void
}> = ({ followers, following, supporters, id, setLeftList }) => {
  return (
    <div className=" flex items-center justify-between text-center gap-5 px-5 z-20">
      <button onClick={() => setLeftList('FOLLOWERS')}>
        <div>{followers?.length || 0}</div>
        <div className=" text-sm">FOLLOWERS</div>
      </button>
      <button className=" border-r border-l px-3" onClick={() => setLeftList('FOLLOWING')}>
        <div>{following?.length || 0}</div>
        <div className=" text-sm">FOLLOWING</div>
      </button>
      <button onClick={() => setLeftList('SUPPORTERS')}>
        <div>{supporters?.length || 0}</div>
        <div className=" text-sm">SUPPORTERS</div>
      </button>
    </div>
  )
}

export default FollowField
