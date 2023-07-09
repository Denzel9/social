import { FunctionComponent } from 'react'
import Coin from './coin/Coin'
import LiveChat from './live-chat/LiveChat'
import Suggested from './suggested/Suggested'

const Sidebar: FunctionComponent = () => {
  return (
    <div className=" w-[400px]">
      <Coin />
      <Suggested />
      <LiveChat />
    </div>
  )
}

export default Sidebar
