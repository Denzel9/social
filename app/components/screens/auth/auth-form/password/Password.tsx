import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { IAuth } from '@/app/types/user.types'
import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import { UseFormRegister, FormState } from 'react-hook-form'

interface IAuthFields {
  register: UseFormRegister<any>
  formState: FormState<IAuth>
}

const Password: FunctionComponent<IAuthFields> = ({ register, formState: { errors } }) => {
  const [openPassword, setOpenPassord] = useState(false)

  return (
    <>
      <div className=" w-full mt-2 py-2 px-4   border border-pagesBG rounded-full flex items-center justify-between">
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'The password must be longer than 6 characters',
            },
          })}
          className="bg-transparent w-full outline-none "
          type={openPassword ? 'text' : 'password'}
          placeholder="Password"
        />
        <div
          className={classNames(
            openPassword ? 'text-green-500' : ' text-pagesBG',
            ' cursor-pointer'
          )}
          onClick={() => setOpenPassord(!openPassword)}
        >
          <MaterialIcon name="MdRemoveRedEye" />
        </div>
      </div>

      {errors.password && errors.password.type === 'required' && (
        <span className="text-red-800">{errors.password.message}</span>
      )}
      {errors.password && errors.password.type === 'minLength' && (
        <span className="text-red-800">{errors.password.message}</span>
      )}
    </>
  )
}

export default Password
