import { FunctionComponent, ReactNode, useState } from 'react'
import Image from 'next/image'

import authBG from '@/public/authbg.png'

const AuthPage: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className=" z-50 h-full w-full bg-navBG fixed top-0 left-0 text-white flex items-start">
      {children}
      <Image src={authBG} alt="bg" width={700} height={10} />
    </div>
  )
}

export default AuthPage
