import { FunctionComponent, ReactNode } from 'react'
import LeftSideContexts from '../context/LeftSideContext'
import ToastrContexts from '../context/ToastrContext'
import UserContexts from '../context/UserContext'
import ModalCoins from '../shared/modal-coins/ModalCoins'
import ModalCoinsContexts from '../context/ModalCoinsContext'

const ContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <UserContexts>
      <ToastrContexts>
        <LeftSideContexts>
          <ModalCoinsContexts>{children}</ModalCoinsContexts>
        </LeftSideContexts>
      </ToastrContexts>
    </UserContexts>
  )
}

export default ContextProvider
