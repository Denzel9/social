import ButtonGradient from '@/app/components/ui/buttons/ButtonGradient'
import SubsButton from '@/app/components/ui/buttons/SubsButton'
import Image from 'next/image'
import { FunctionComponent } from 'react'

interface IPersonItem {
  name: string
  button: boolean
  img: string
  following: string[]
  followers: string[]
  anoterNickname: string
  anoterId: string
  id: string
}

const PersonItem: FunctionComponent<IPersonItem> = ({
  name,
  button,
  img,
  following,
  followers,
  anoterNickname,
  anoterId,
  id,
}) => {
  return (
    <div className=" flex items-center justify-between text-white mt-5">
      <div className=" flex items-center gap-3">
        <Image className=" rounded-lg" src={img} alt="" width={50} height={50} />
        <div>
          <p>{name}</p>
          <p className=" opacity-30">{anoterNickname}</p>
        </div>
      </div>
      {button && (
        <SubsButton following={following} followers={followers} id={id} anoterId={anoterId} />
      )}
      {!button && <p>2h ago</p>}
    </div>
  )
}

export default PersonItem
