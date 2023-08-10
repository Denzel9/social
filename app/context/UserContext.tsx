import { FunctionComponent, ReactNode, createContext } from 'react'
import { IUser } from '../types/user.types'
import { useAuthUser } from '../hooks/user/useUser'

export const UserContext = createContext({} as IUserContext)

interface IUserContext {
  user: IUser
  isLoading: boolean
}

const UserContexts: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuthUser()

  return (
    <UserContext.Provider value={{ user, isLoading } as unknown as IUserContext}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContexts
