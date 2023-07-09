import { FunctionComponent, ReactNode, createContext, useState } from 'react'
import Navigation from './navigation/Navigation'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import { useGetUser } from '@/app/hooks/user/useUser'
import { IUser } from '@/app/types/user.types'
import Toastr from '../ui/customToastr/Toastr'

export const UserContext = createContext({} as IUser)
export const ToastrContext = createContext({} as Itoastr)

interface Itoastr {
  openToastr: boolean
  setOpenToastr(open: boolean): void
}

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { user } = useGetUser()
  const [openToastr, setOpenToastr] = useState(false)
  console.log(user)
  const toastr = {
    openToastr,
    setOpenToastr,
  }

  return (
    <UserContext.Provider value={user as unknown as IUser}>
      <ToastrContext.Provider value={toastr as unknown as Itoastr}>
        <Toastr />
        <Navigation />
        <div className=" w-11/12 float-right">
          <Header />
          <div className=" mt-20 p-4 flex items-start gap-5">
            {children}
            <Sidebar />
          </div>
        </div>
      </ToastrContext.Provider>
    </UserContext.Provider>
  )
}

export default Layout
