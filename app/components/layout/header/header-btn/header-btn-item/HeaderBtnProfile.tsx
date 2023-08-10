import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SkeletonLoader from '@/app/components/ui/skeleton/Skeleton'

const HeaderBtnProfile: FunctionComponent<{ avatar: string; isLoading: boolean }> = ({
  avatar,
  isLoading,
}) => {
  return (
    <Link href={'/profile'}>
      {isLoading ? (
        <SkeletonLoader circle={true} width={50} height={50} />
      ) : (
        <Image
          className=" rounded-lg"
          src={avatar || '/Unknown.jpeg'}
          alt={'profile'}
          width={50}
          height={50}
        />
      )}
    </Link>
  )
}

export default HeaderBtnProfile
