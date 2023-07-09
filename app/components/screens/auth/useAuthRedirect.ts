import { useAuth } from '@/app/hooks/useAuth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useAuthRedirect = () => {
  const { isAuth } = useAuth()

  const { query, push } = useRouter()

  const redirect = query.redirect ? String(query.redirect) : '/home'

  useEffect(() => {
    if (isAuth) push(redirect)
  }, [isAuth, redirect, push])
}

export const useLogoutRedirect = () => {
  const { isAuth } = useAuth()

  const { query, push } = useRouter()

  const redirect = query.redirect ? String(query.redirect) : '/'

  useEffect(() => {
    if (!isAuth) push(redirect)
  }, [isAuth, redirect, push])
}
