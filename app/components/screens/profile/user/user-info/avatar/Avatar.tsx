import { FunctionComponent } from 'react'
import Image from 'next/image'
import EditButton from '@/app/components/ui/edit-button/EditButton'
import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import { useSinglePets } from '@/app/hooks/pet/usePets'
import SkeletonLoader from '@/app/components/ui/skeleton/Skeleton'

const Avatar: FunctionComponent<{
  avatar: string
  setTarget(open: string): void
  setOpen(open: boolean): void
  id: string
  pets: string[]
}> = ({ avatar, setOpen, setTarget, id, pets }) => {
  const { userId } = useAuth()
  const currentPet = pets?.slice(-1).join('')
  const { pet } = useSinglePets(currentPet || '')

  return (
    <div className="z-10 relative">
      {avatar ? (
        <Image
          className=" rounded-full m-auto -mt-16 border-8 border-pagesBG "
          src={avatar || 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'}
          alt={'avatar'}
          width={130}
          height={130}
          priority
        />
      ) : (
        <SkeletonLoader circle={true} width={120} height={120} />
      )}
      {userId === id && (
        <div className=" text-xl bg-purple w-9 h-9 p-2 rounded-full absolute left-40 top-6 bottom-5 opacity-40 hover:opacity-100 transition-colors">
          <EditButton setTarget={setTarget} setOpen={setOpen} name={'avatar'} />
        </div>
      )}

      {pet ? (
        <Link href={'/mypet'}>
          <Image
            className=" absolute right-20 bottom-8 rounded-full"
            src={pet && pet[0].avatar}
            alt={'fox'}
            width={40}
            height={40}
          />
        </Link>
      ) : (
        <SkeletonLoader circle={true} width={40} height={40} />
      )}
    </div>
  )
}

export default Avatar
