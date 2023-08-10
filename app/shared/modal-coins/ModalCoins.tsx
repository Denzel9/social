import { ModalCoinsContext } from '@/app/context/ModalCoinsContext'
import classNames from 'classnames'
import { FunctionComponent, useContext, useState } from 'react'
import { UserContext } from '@/app/context/UserContext'
import ProPass from './pro-pass/ProPass'
import OrderCoins from './OrderCoins'

const ModalCoins: FunctionComponent = () => {
  const { openModal, setModal, type, setType } = useContext(ModalCoinsContext)
  const { user } = useContext(UserContext)

  return (
    <section
      className={classNames(
        openModal ? 'fixed bg-navBG bg-opacity-50' : 'hidden',
        '  z-30 left-0 top-0 right-0 w-full h-full flex items-center justify-center'
      )}
      onClick={() => setModal('order')}
    >
      {type === 'order' ? (
        <OrderCoins user={user} setType={setType} />
      ) : (
        <ProPass user={user} setType={setType} />
      )}
    </section>
  )
}

export default ModalCoins
