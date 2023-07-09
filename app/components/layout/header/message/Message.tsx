import classNames from 'classnames'
import { FunctionComponent } from 'react'

const Message: FunctionComponent<{ open: boolean; setOpen(open: boolean): void }> = ({
  open,
  setOpen,
}) => {
  return (
    <div
      className={classNames(
        open ? ' opacity-100' : '  opacity-0 pointer-events-none',
        ' duration-500 w-screen h-screen absolute top-0 left-0 right-0'
      )}
      onClick={() => setOpen(false)}
    >
      <div
        className={classNames(
          open ? 'translate-x-0' : ' translate-x-96',
          ' duration-500 rounded-lg absolute top-20 right-28 bg-purple w-[350px] h-[300px] p-5  text-white'
        )}
      >
        <h1>Message</h1>
      </div>
    </div>
  )
}

export default Message
