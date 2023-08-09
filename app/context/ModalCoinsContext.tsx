import { FunctionComponent, ReactNode, createContext, useState } from 'react'

export const ModalCoinsContext = createContext<IModalCoins>({} as IModalCoins)

interface IModalCoins {
  openModal: boolean
  setModal(type: 'order' | 'pro'): void
  type: 'order' | 'pro'
  setType(type: 'order' | 'pro'): void
}

const ModalCoinsContexts: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [openModal, setOpenModal] = useState(false)
  const [type, setType] = useState<'order' | 'pro'>('order')

  const setModal = (type: 'order' | 'pro') => {
    setOpenModal(!openModal)
    setType(type)
  }

  return (
    <ModalCoinsContext.Provider value={{ openModal, setModal, type, setType }}>
      {children}
    </ModalCoinsContext.Provider>
  )
}

export default ModalCoinsContexts
