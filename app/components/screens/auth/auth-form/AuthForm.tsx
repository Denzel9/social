import { IAuth } from '@/app/types/user.types'
import { FunctionComponent, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Email from './email/Email'
import Password from './password/Password'
import { useAuth } from '@/app/lib/useAuth'
import AuthButton from './auth-button/AuthButton'
import { useAuthRedirect } from '../useAuthRedirect'

const AuthForm: FunctionComponent = () => {
  const { register, formState, reset, handleSubmit } = useForm<IAuth>({ mode: 'onChange' })
  const [type, setType] = useState<'login' | 'register'>('login')
  const { handleSign, handleRegistr } = useAuth()
  useAuthRedirect()

  const onSubmit: SubmitHandler<IAuth> = (data) => {
    if (type === 'login') handleSign(data)
    else if (type === 'register') handleRegistr(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" pl-4 mt-10">
      <div>Email Address</div>
      <Email register={register} formState={formState} />
      <div className=" mt-5">Password</div>
      <Password register={register} formState={formState} />
      <div className=" flex items-center gap-3">
        <AuthButton text={'login'} setType={() => setType('login')} />
        <AuthButton text={'Registration'} setType={() => setType('register')} />
      </div>
    </form>
  )
}

export default AuthForm
