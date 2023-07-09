import { FunctionComponent, useContext, useMemo } from 'react'
import PersonItem from './person-item/PersonItem'
import { useGetAllUser } from '@/app/hooks/user/useUser'
import { UserContext } from '../../Layout'

const Suggested: FunctionComponent = () => {
  const { users } = useGetAllUser()
  const user = useContext(UserContext)
  return (
    <div className=" w-full h-[275px] bg-navBG mt-5 rounded-md p-5 text-white">
      <span className=" font-black">SUGGESTED FOR YOU</span>
      <button className=" float-right">See All</button>
      <ul>
        {users?.map((item) => {
          if (item.authId !== user?.authId) {
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
                img={item?.avatar}
              />
            )
          }
        })}
      </ul>
    </div>
  )
}

export default Suggested
