import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SkeletonLoader from '@/app/components/ui/skeleton/Skeleton'

const HeaderBtnProfile: FunctionComponent<{ avatar: string }> = ({ avatar }) => {
  return (
    <Link href={'/profile'}>
      {avatar ? (
        <Image
          className=" rounded-lg"
          src={avatar || '/Unknown.jpeg'}
          alt={'profile'}
          width={50}
          height={50}
        />
      ) : (
        <SkeletonLoader circle={true} width={50} height={50} />
      )}
    </Link>
  )
}

export default HeaderBtnProfile
