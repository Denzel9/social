import { FunctionComponent } from 'react'
import Image from 'next/image'
import { ILiked } from '@/app/types/user.types'
import Link from 'next/link'

const FavoriteItem: FunctionComponent<ILiked> = ({ img, id, title, author, postId }) => {
  return (
    <Link href={`/post/${postId}`} className=" flex items-center gap-3 text-white mt-5 ">
      <div className="w-16 h-10">
        <Image
          className=" rounded-lg h-full w-20"
          src={img || '/Unknown.jpeg'}
          alt="Unknown"
          width={50}
          height={50}
        />
      </div>
      <div className=" w-4/5">
        <p className=" text-purple">{author}</p>
        <p className=" truncate">{title || 'Unknown'}</p>
      </div>
    </Link>
  )
}

export default FavoriteItem
