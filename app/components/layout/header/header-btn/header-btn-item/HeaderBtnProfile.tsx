import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeaderBtnProfile: FunctionComponent<{ avatar: string }> = ({ avatar }) => {
  return (
    <Link href={'/profile'}>
      <Image
        className=" rounded-lg"
        src={avatar || '/Unknown.jpeg'}
        alt={'profile'}
        width={50}
        height={50}
      />
    </Link>
  )
}

export default HeaderBtnProfile
