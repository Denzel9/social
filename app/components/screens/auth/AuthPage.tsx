import { FunctionComponent } from 'react'
import AuthForm from './auth-form/AuthForm'
import Image from 'next/image'
import Logo from '../../layout/navigation/logo/Logo'

const AuthPage: FunctionComponent = () => {
  return (
    <div className=" z-50 h-full w-full bg-navBG fixed top-0 left-0 text-white flex items-start">
      <div className="w-2/6 mx-auto mt-10 flex flex-col gap-36">
        <Logo />
        {/* <div className=" pl-4 text-xl mt-20">Let’s Learn More About You!</div>
        <div className=" pl-4 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.
        </div> */}
        <AuthForm />
      </div>
      <Image src={'/authbg.png'} alt="bg" width={700} height={10} />
    </div>
  )
}

export default AuthPage
