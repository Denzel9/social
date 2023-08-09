import { FunctionComponent } from 'react'
import PersonItem from '../person-item/PersonItem'
import { IUser } from '@/app/types/user.types'

const SupportsList: FunctionComponent<{ users: IUser[]; user: IUser }> = ({ users, user }) => {
  return (
    <ul>
      {users?.map((item) => {
        if (user?.supporters?.includes(item.id!))
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

export default SupportsList
