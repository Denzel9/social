import { FunctionComponent } from 'react'
import Coin from './coin/Coin'
import LiveChat from './favorite-posts/FavoritePosts'
import Suggested from './suggested/Suggested'
import { usePathname } from 'next/navigation'

const Sidebar: FunctionComponent = () => {
  const path = usePathname()

  return (
    path !== '/casino' && (
      <div className=" w-[400px]">
        <Coin />
        <Suggested />
        <LiveChat />
      </div>
    )
  )
}

export default Sidebar
