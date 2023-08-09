import ButtonGradient from '@/app/components/ui/buttons/ButtonGradient'
import SubsButton from '@/app/components/ui/buttons/SubsButton'
import { LeftSideContext } from '@/app/context/LeftSideContext'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent, useContext } from 'react'

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
  const { setLeftList, openLeftSide } = useContext(LeftSideContext)
  return (
    <div className=" flex items-center justify-between text-white mt-5">
      <Link
        href={`/user/${nickname}`}
        onClick={() => (openLeftSide ? setLeftList('', 'layout') : '')}
      >
        <div className=" flex items-center gap-3">
          <Image
            className=" rounded-lg w-14 h-12"
            src={avatar || '/Unknown.jpeg'}
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
      {button && (
        <SubsButton following={following} followers={followers} id={id} anoterId={anoterId} />
      )}
      {!button && <p>2h ago</p>}
    </div>
  )
}

export default PersonItem
