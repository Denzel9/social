import { FunctionComponent } from 'react'
import Image from 'next/image'

interface ChatItemProps {
  img: string
  nickname: string
}

const ChatItem: FunctionComponent<ChatItemProps> = ({ img, nickname }) => {
  return (
    <div className=" flex items-center justify-between text-white mt-5">
      <div className=" flex items-center gap-3">
        <Image
          className=" rounded-lg"
          src={img || '/Unknown.jpeg'}
          alt="Unknown"
          width={50}
          height={50}
        />
        <div>
          <p>{nickname || 'Unknown'}</p>
        </div>
      </div>
      <p>2h ago</p>
    </div>
  )
}

export default ChatItem
