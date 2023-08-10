import { FunctionComponent, ReactNode, createContext, useState } from 'react'
import { IUser } from '../types/user.types'

export const LeftSideContext = createContext({} as ItLeftSIde)

interface ItLeftSIde {
  openLeftSide: boolean
  target: string
  setLeftList(open: string, person: IUser): void
  person: IUser
  setPerson(person: IUser): void
  setOpenLeftSide(open: boolean): void
}

const LeftSideContexts: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [openLeftSide, setOpenLeftSide] = useState(false)
  const [target, setTarget] = useState('')
  const [person, setPerson] = useState<IUser>({} as IUser)

  const setLeftList = (string: string, person: IUser) => {
    setTarget(string)
    setOpenLeftSide(!openLeftSide)
    setPerson(person)
  }

  return (
    <LeftSideContext.Provider
      value={{ openLeftSide, target, setLeftList, person, setPerson, setOpenLeftSide }}
    >
      {children}
    </LeftSideContext.Provider>
  )
}

export default LeftSideContexts
