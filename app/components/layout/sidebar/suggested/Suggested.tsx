import { FunctionComponent, useContext, useMemo } from 'react'
import PersonItem from '../../../../shared/person-item/PersonItem'
import { useGetAllUser } from '@/app/hooks/user/useUser'
import { UserContext } from '@/app/context/UserContext'

const Suggested: FunctionComponent = () => {
  const { users } = useGetAllUser()
  const { user } = useContext(UserContext)
  const suggUsers = users?.filter(
    (item) => item.authId !== user?.authId && !user?.following?.includes(item?.id!)
  )
  return (
    <div className=" w-full h-[275px] bg-navBG mt-5 rounded-md p-5 text-white">
      <span className=" font-black">SUGGESTED FOR YOU</span>
      {suggUsers?.length ? <button className=" float-right">See All</button> : null}
      {suggUsers?.length ? (
        <ul>
          {suggUsers?.map((item) => {
            return (
              <PersonItem
                key={item?.id}
                following={user?.following}
                followers={item?.followers}
                anoterNickname={item?.nickname}
                id={user?.id!}
                anoterId={item?.id!}
                name={item?.name}
                button={true}
                avatar={item?.avatar}
                nickname={item?.nickname}
              />
            )
          })}
        </ul>
      ) : null}

      {suggUsers?.length ? null : <p>There are no users offered to you</p>}
    </div>
  )
}

export default Suggested
