import { FunctionComponent } from 'react'
import ChatInput from './chat-input/ChatInput'
import PersonItem from '../suggested/person-item/PersonItem'

const LiveChat: FunctionComponent = () => {
  return (
    <div className=" w-full h-[330px] bg-navBG mt-5 rounded-md p-5 text-white flex flex-col justify-between">
      <div className=" flex items-center justify-between">
        <span className=" font-black">LIVE CHAT</span>
        <button className=" border border-purple py-2 px-4 rounded-full hover:bg-purple">
          Add Group
        </button>
      </div>
      <ul>
        <PersonItem name={'BigDaddy'} text={'Lorem ipsum?'} button={false} />
        <PersonItem name={'BigDaddy'} text={'Lorem ipsum?'} button={false} />
      </ul>
      <ChatInput />
    </div>
  )
}

export default LiveChat
