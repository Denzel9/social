import { FunctionComponent, ReactNode, createContext, useState } from 'react'

export const LeftSideContext = createContext({} as ItLeftSIde)

interface ItLeftSIde {
  openLeftSide: boolean
  target: string
  setLeftList(open: string): void
}

const LeftSideContexts: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [openLeftSide, setOpenLeftSide] = useState(false)
  const [target, setTarget] = useState('')

  const setLeftList = (string: string) => {
    setTarget(string)
    setOpenLeftSide(!openLeftSide)
  }

  return (
    <LeftSideContext.Provider value={{ openLeftSide, target, setLeftList }}>
      {children}
    </LeftSideContext.Provider>
  )
}

export default LeftSideContexts
