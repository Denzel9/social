import { FunctionComponent, ReactNode, createContext, useEffect, useState } from 'react'
import Navigation from './navigation/Navigation'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Toastr from '../ui/customToastr/Toastr'
import { useAuth, useUser } from '@clerk/nextjs'
import AuthPage from '../screens/auth/AuthPage'
import SubsList from '../../shared/subsList-modal/SubsList'
import ModalCoins from '@/app/shared/modal-coins/ModalCoins'
import ContextProvider from '@/app/providers/ContextProvider'
import ScrollTop from './scrollTop/ScrollTop'
import { useGetAllUser, useIsAuthUser } from '@/app/hooks/user/useUser'

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { users } = useGetAllUser()
  const { findNewUser } = useIsAuthUser()
  const { user, isSignedIn } = useUser()
  const searchUser = users?.find((item) => item?.email === user?.primaryEmailAddress?.emailAddress)

  useEffect(() => {
    if (user && !searchUser) findNewUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return isSignedIn ? (
    <ContextProvider>
      <Toastr />
      <Navigation />
      <div className=" w-11/12 float-right">
        <Header />
        <div className=" mt-20 p-4 flex items-start gap-5">
          {children}
          <Sidebar />
        </div>
      </div>
      <SubsList />
      <ModalCoins />
      <ScrollTop />
    </ContextProvider>
  ) : (
    <AuthPage>
      <section className=" w-full h-full flex flex-col items-center mt-20 gap-5 ">
        <h1 className=" text-6xl font-bold text-white">GAMER SUDIO</h1>
        {children}
      </section>
    </AuthPage>
  )
}

export default Layout
