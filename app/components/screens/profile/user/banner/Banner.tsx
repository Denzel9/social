import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { useAuth } from '@clerk/nextjs'
import classNames from 'classnames'
import Image from 'next/image'
import { FunctionComponent } from 'react'

const Banner: FunctionComponent<{
  setTarget(open: string): void
  setOpen(open: boolean): void
  banner: string
  id: string
}> = ({ setOpen, setTarget, banner, id }) => {
  const handleClock = () => {
    setTarget('banner')
    setOpen(true)
  }
  const { userId } = useAuth()
  return (
    <div className={' relative w-[870px] bg-purple h-[142px] rounded-lg '}>
      <Image
        className=" rounded-lg w-full h-36"
        src={banner || ''}
        alt={'banner'}
        width={100}
        height={50}
      />
      {userId === id && (
        <button
          className="absolute top-5 right-5 text-white text-2xl opacity-30 p-2 bg-pagesBG rounded-md hover:opacity-100 transition-all"
          onClick={handleClock}
        >
          <MaterialIcon name="MdOutlinePhotoSizeSelectActual" />
        </button>
      )}
    </div>
  )
}

export default Banner
