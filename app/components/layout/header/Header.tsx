import { FunctionComponent, useState } from 'react'
import HeaderInput from './header-search/HeaderSearch'
import HeaderBtn from './header-btn/HeaderBtn'
import Notification from './notification/Notification'
import Message from './message/Message'

const Header: FunctionComponent = () => {
  const [openNotification, setOpenNotification] = useState(false)
  const [openMessage, setOpenMessage] = useState(false)
  return (
    <header className=" p-4 fixed top-0 w-11/12 bg-pagesBG flex items-center justify-between z-20">
      <HeaderInput />
      <HeaderBtn
        notification={openNotification}
        setNotification={setOpenNotification}
        message={openMessage}
        setMessage={setOpenMessage}
      />
      <Notification open={openNotification} setOpen={setOpenNotification} />
      <Message open={openMessage} setOpen={setOpenMessage} />
    </header>
  )
}

export default Header
