import { FunctionComponent, ReactNode, useState } from 'react'
import Image from 'next/image'
import Logo from '../../layout/navigation/logo/Logo'
import classNames from 'classnames'

const AuthPage: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [type, setType] = useState<'login' | 'signUp'>('login')
  return (
    <div className=" z-50 h-full w-full bg-navBG fixed top-0 left-0 text-white flex items-start">
      {children}
      <Image src={'/authbg.png'} alt="bg" width={700} height={10} />
    </div>
  )
}

export default AuthPage
