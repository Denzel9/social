import { FunctionComponent, ReactNode, createContext, useState } from 'react'

export const LeftSideContext = createContext({} as ItLeftSIde)

interface ItLeftSIde {
  openLeftSide: boolean
  target: string
  setLeftList(open: string, type: 'layout' | 'user'): void
  type: 'layout' | 'user'
  setType(type: 'layout' | 'user'): void
}

const LeftSideContexts: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [openLeftSide, setOpenLeftSide] = useState(false)
  const [target, setTarget] = useState('')
  const [type, setType] = useState<'layout' | 'user'>('layout')

  const setLeftList = (string: string, type: 'layout' | 'user') => {
    setTarget(string)
    setOpenLeftSide(!openLeftSide)
    setType(type)
  }

  return (
    <LeftSideContext.Provider value={{ openLeftSide, target, setLeftList, type, setType }}>
      {children}
    </LeftSideContext.Provider>
  )
}

export default LeftSideContexts
