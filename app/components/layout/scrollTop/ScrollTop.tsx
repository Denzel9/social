import classNames from 'classnames'
import { FunctionComponent, useEffect, useState } from 'react'
import { MaterialIcon } from '../../ui/icons/MaterialIcon'

const ScrollTop: FunctionComponent = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    scrolled > 800 ? setVisible(true) : setVisible(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <button
      onClick={scrollToTop}
      className={classNames(
        visible
          ? ' opacity-100 pointer-events-auto duration-500'
          : ' opacity-0 pointer-events-none duration-500',
        ' fixed right-5 bottom-5 w-14 h-14 rounded-full bg-purple text-white p-1 text-5xl hover:scale-110 transition-transform'
      )}
    >
      <MaterialIcon name="MdOutlineKeyboardArrowUp" />
    </button>
  )
}

export default ScrollTop
