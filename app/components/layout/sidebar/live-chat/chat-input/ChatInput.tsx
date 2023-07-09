import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { FunctionComponent } from 'react'

const ChatInput: FunctionComponent = () => {
  return (
    <div className=" w-full mt-3 bg-pagesBG py-2 px-4 flex items-center justify-between rounded-lg">
      <input
        className=" outline-none bg-transparent w-[300px]"
        type="text"
        placeholder="Send Message"
      />
      <button className=" bg-purple text-pagesBG p-2 rounded-md text-lg hover:text-white transition-colors">
        <MaterialIcon name="MdSend" />
      </button>
    </div>
  )
}

export default ChatInput
