import SubsButton from '@/app/components/ui/buttons/SubsButton'
import { LeftSideContext } from '@/app/context/LeftSideContext'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent, useContext } from 'react'

import unknown from '@/public/Unknown.jpeg'
import { UserContext } from '@/app/context/UserContext'

interface IPersonItem {
  name: string
  button: boolean
  avatar: string
  following: string[]
  followers: string[]
  anoterNickname?: string
  anoterId: string
  id: string
  nickname: string
}

const PersonItem: FunctionComponent<IPersonItem> = ({
  name,
  button,
  avatar,
  following,
  followers,
  anoterNickname,
  anoterId,
  id,
  nickname,
}) => {
  const { setOpenLeftSide, openLeftSide } = useContext(LeftSideContext)
  const { user } = useContext(UserContext)
  return (
    <div className=" flex items-center justify-between text-white mt-5">
      <Link
        href={id !== user?.id ? '/profile' : `/user/${nickname}`}
        onClick={() => (openLeftSide ? setOpenLeftSide(false) : '')}
      >
        <div className=" flex items-center gap-3">
          <Image
            className=" rounded-lg w-14 h-12"
            src={avatar || unknown}
            alt="Unknown"
            width={50}
            height={50}
          />
          <div>
            <p>{name}</p>
            <p className=" opacity-30">{anoterNickname}</p>
          </div>
        </div>
      </Link>

      {button ? (
        id === user?.id ? (
          <SubsButton following={following} followers={followers} id={id} anoterId={anoterId} />
        ) : null
      ) : (
        !button && <p>2h ago</p>
      )}
    </div>
  )
}

export default PersonItem
