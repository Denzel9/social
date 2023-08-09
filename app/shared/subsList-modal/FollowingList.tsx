import { IUser } from '@/app/types/user.types'
import { FunctionComponent } from 'react'
import PersonItem from '../person-item/PersonItem'

const FollowingList: FunctionComponent<{ users: IUser[]; user: IUser }> = ({ users, user }) => {
  return (
    <ul>
      {users?.map((item) => {
        if (user?.following?.includes(item.id!))
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
  )
}

export default FollowingList
