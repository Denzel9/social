import { useAppSelector } from './useSelector'

type IAuth = {
  email: string
  authId: string
  isAuth: boolean
}

export function useAuth(): IAuth {
  const { email, authId } = useAppSelector((state) => state.user)

  return {
    isAuth: !!email,
    email,
    authId,
  }
}
