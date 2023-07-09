import { validEmail } from '@/app/types/regex'
import { IAuth } from '@/app/types/user.types'
import { FunctionComponent } from 'react'
import { UseFormRegister, FormState } from 'react-hook-form'

interface IAuthFields {
  register: UseFormRegister<any>
  formState: FormState<IAuth>
}

const Email: FunctionComponent<IAuthFields> = ({ register, formState: { errors } }) => {
  return (
    <div>
      <input
        className=" block w-full mt-3 py-2 px-4 bg-transparent border border-pagesBG rounded-full outline-none"
        type="email"
        placeholder="Email"
        autoComplete="false"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: validEmail,
            message: 'Error email',
          },
        })}
      />

      {errors.email && errors.email.type === 'required' && (
        <span className=" text-red-800">{errors.email.message}</span>
      )}
      {errors.email && errors.email.type === 'pattern' && (
        <span className="text-red-800">{errors.email.message}</span>
      )}
    </div>
  )
}

export default Email
