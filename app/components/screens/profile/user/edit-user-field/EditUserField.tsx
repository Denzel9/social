import { FunctionComponent, useState } from 'react'
import ButtonGradient from '../../../../ui/buttons/ButtonGradient'
import classNames from 'classnames'
import { useUpdateUser } from '@/app/hooks/user/useUser'

const EditUserField: FunctionComponent<{
  open: boolean
  target: string
  setOpen(open: boolean): void
  id: string
}> = ({ id, open, setOpen, target }) => {
  const [text, setText] = useState('')
  const { update } = useUpdateUser(id, target, text)
  const handleClick = () => {
    update()
    setText('')
    setOpen(false)
  }
  return (
    <div
      onClick={() => setOpen(false)}
      className={classNames(
        open ? '  bg-opacity-30' : '  bg-opacity-0 pointer-events-none',
        ' z-30 fixed top-0 left-0 bg-navBG  w-full h-full'
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          open ? ' translate-y-0' : ' -translate-y-40',
          ' opacity-100 duration-500 z-30 border-b border-purple fixed top-0 left-0 right-0 w-full h-40 bg-navBG text-white'
        )}
      >
        <div className=" text-center text-3xl mt-8 mb-2">Edit {target}</div>
        <div className=" w-2/6 m-auto  h-10 bg-pagesBG rounded-lg">
          <input
            className=" w-2/3 h-10 outline-none bg-transparent px-4 "
            type="text"
            placeholder="Edit..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className=" float-right" onClick={handleClick}>
            <ButtonGradient text="Save" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditUserField
