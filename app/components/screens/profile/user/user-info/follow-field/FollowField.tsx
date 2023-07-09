import { FunctionComponent } from 'react'

const FollowField: FunctionComponent<{
  followers: string[]
  following: string[]
  supporters: string[]
}> = ({ followers, following, supporters }) => {
  return (
    <div className=" flex items-center justify-between text-center gap-5 px-5">
      <button>
        <div>{followers?.length || 0}</div>
        <div className=" text-sm">FOLLOWERS</div>
      </button>
      <button className=" border-r border-l px-3">
        <div>{following?.length || 0}</div>
        <div className=" text-sm">FOLLOWING</div>
      </button>
      <button>
        <div>{supporters?.length || 0}</div>
        <div className=" text-sm">SUPPORTERS</div>
      </button>
    </div>
  )
}

export default FollowField
