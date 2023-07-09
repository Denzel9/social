import { FunctionComponent } from 'react'
import { MaterialIcon } from '../icons/MaterialIcon'

interface EditButtonProps {
  setTarget(text: string): void
  setOpen(open: boolean): void
  name: string
}

const EditButton: FunctionComponent<EditButtonProps> = ({ setOpen, setTarget, name }) => {
  const handleClick = (text: string) => {
    setTarget(text)
    setOpen(true)
  }
  return (
    <button name={name!} className=" text-xl" onClick={(e) => handleClick(e.currentTarget.name)}>
      <MaterialIcon name="MdOutlineModeEditOutline" />
    </button>
  )
}

export default EditButton
