import { LeftSideContext } from '@/app/context/LeftSideContext'
import classNames from 'classnames'
import { FunctionComponent, useContext } from 'react'
import { useGetAllUser, useGetUser } from '@/app/hooks/user/useUser'
import FollowersList from './FollowersList'
import FollowingList from './FollowingList'
import SupportsList from './SupportsList'
import { usePathname } from 'next/navigation'
import { IUser } from '@/app/types/user.types'
import { UserContext } from '@/app/context/UserContext'

const SubsList: FunctionComponent = () => {
  const { openLeftSide, setLeftList, target } = useContext(LeftSideContext)
  const { users } = useGetAllUser()
  const pathname = usePathname()?.split('/')[2]
  const { currentUser } = useGetUser(pathname!)
  const user = useContext(UserContext)
  return (
    <div
      onClick={() => setLeftList('')}
      className={classNames(
        openLeftSide ? '  bg-opacity-30' : '  bg-opacity-0 pointer-events-none',
        ' z-30 fixed top-0 left-0 right-0 bg-navBG w-full h-full'
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          openLeftSide ? 'translate-x-0' : ' -translate-x-96',
          ' p-5 opacity-100 duration-500 z-30 border-r border-purple fixed top-0 left-0 w-[350px] h-full bg-navBG text-white'
        )}
      >
        <h2 className=" text-xl">{target}</h2>
        {pathname ? (
          <>
            {target === 'FOLLOWERS' && (
              <FollowersList users={users!} user={currentUser! as unknown as IUser} />
            )}
            {target === 'FOLLOWING' && (
              <FollowingList users={users!} user={currentUser! as unknown as IUser} />
            )}
            {target === 'SUPPORTERS' && (
              <SupportsList users={users!} user={currentUser! as unknown as IUser} />
            )}
          </>
        ) : (
          <>
            {target === 'FOLLOWERS' && <FollowersList users={users!} user={user} />}
            {target === 'FOLLOWING' && <FollowingList users={users!} user={user} />}
            {target === 'SUPPORTERS' && <SupportsList users={users!} user={user} />}
          </>
        )}
      </div>
    </div>
  )
}

export default SubsList
