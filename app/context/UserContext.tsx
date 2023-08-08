import { FunctionComponent, ReactNode, createContext } from 'react'
import { IUser } from '../types/user.types'
import { useAuthUser } from '../hooks/user/useUser'

export const UserContext = createContext({} as IUser)

const UserContexts: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuthUser()

  return <UserContext.Provider value={user as unknown as IUser}>{children}</UserContext.Provider>
}

export default UserContexts
