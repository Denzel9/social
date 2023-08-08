import { FunctionComponent, ReactNode, createContext, useState } from 'react'

export const ToastrContext = createContext({} as Itoastr)

interface Itoastr {
  openToastr: boolean
  setOpenToastr(open: boolean): void
}

const ToastrContexts: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [openToastr, setOpenToastr] = useState(false)
  const toastr = {
    openToastr,
    setOpenToastr,
  }
  return (
    <ToastrContext.Provider value={toastr as unknown as Itoastr}>{children}</ToastrContext.Provider>
  )
}

export default ToastrContexts
