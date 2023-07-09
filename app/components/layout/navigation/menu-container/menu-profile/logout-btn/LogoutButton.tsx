import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { useAuth } from '@/app/hooks/useAuth'
import classNames from 'classnames'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { deleteUser } from '@/app/redux/reducer/user'
import { useLogoutRedirect } from '@/app/components/screens/auth/useAuthRedirect'

const LogoutButton: FunctionComponent = () => {
  const { isAuth } = useAuth()
  const auth = getAuth()
  const dispatch = useDispatch()
  useLogoutRedirect()
  const handleClick = () => {
    signOut(auth).then(() => {
      dispatch(deleteUser())
    })
  }

  if (isAuth)
    return (
      <button
        className={classNames(
          'text-gray text-2xl hover:bg-pagesBG hover:text-purple w-[105px] py-3 pl-8 rounded-bl-2xl rounded-tl-2xl transition-colors'
        )}
        onClick={handleClick}
      >
        <MaterialIcon name={'MdOutlineLogout'} />
      </button>
    )

  return (
    <Link
      href={'/'}
      className={classNames(
        'text-gray text-2xl hover:bg-pagesBG hover:text-purple w-[105px] py-3 pl-8 rounded-bl-2xl rounded-tl-2xl transition-colors'
      )}
    >
      <MaterialIcon name={'MdOutlineLogin'} />
    </Link>
  )
}

export default LogoutButton
