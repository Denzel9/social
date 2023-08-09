import { FunctionComponent, useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IAuthor } from '@/app/types/posts.types'
import SubsButton from '../../../components/ui/buttons/SubsButton'
import SettingField from '../../setting-field/SettingField'
import { UserContext } from '@/app/context/UserContext'
import SkeletonLoader from '@/app/components/ui/skeleton/Skeleton'

const InfoCreator: FunctionComponent<{ author: IAuthor; postId: string }> = ({
  author,
  postId,
}) => {
  const user = useContext(UserContext)

  return (
    <div className=" flex items-center justify-between">
      <Link
        href={author.nickname === user?.nickname! ? '/profile' : `/user/${author?.nickname}`}
        className=" flex items-center gap-3"
      >
        {author?.avatar ? (
          <Image
            className=" rounded-full"
            src={author?.avatar}
            alt={'avatar'}
            width={50}
            height={50}
          />
        ) : (
          <SkeletonLoader circle={true} width={50} height={50} />
        )}
        <div>
          <p>{author?.name}</p>
          <p className=" text-xs opacity-30 text-left">{author?.nickname}</p>
        </div>
      </Link>
      <div className=" flex items-center gap-3">
        {user?.id !== author?.id && (
          <SubsButton
            following={user?.following}
            id={user?.id!}
            followers={user?.followers}
            anoterId={author?.id}
          />
        )}
        <SettingField postId={postId} userId={user?.id!} authorId={author?.id} />
      </div>
    </div>
  )
}

export default InfoCreator
