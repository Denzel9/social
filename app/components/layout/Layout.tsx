import { FunctionComponent, ReactNode, createContext, useState } from 'react'
import Navigation from './navigation/Navigation'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Toastr from '../ui/customToastr/Toastr'
import { useAuth } from '@clerk/nextjs'
import AuthPage from '../screens/auth/AuthPage'
import LeftSideContexts from '@/app/context/LeftSideContext'
import UserContexts from '@/app/context/UserContext'
import ToastrContexts from '@/app/context/ToastrContext'
import SubsList from '../shared/subsList-modal/SubsList'

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { userId } = useAuth()
  return userId ? (
    <UserContexts>
      <ToastrContexts>
        <LeftSideContexts>
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
        </LeftSideContexts>
      </ToastrContexts>
    </UserContexts>
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
