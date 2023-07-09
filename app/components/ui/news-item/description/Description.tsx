import { FunctionComponent, useContext, useState } from 'react'
import ButtonEmpty from '../../buttons/ButtonEmpty'
import ButtonGradient from '../../buttons/ButtonGradient'
import { PostContext } from '../NewsItem'
import { useEditDesc } from '@/app/hooks/post/usePost'

const Description: FunctionComponent<{ open: boolean; text: string; id: string }> = ({
  open,
  text,
  id,
}) => {
  const [editText, setEditText] = useState(text)
  const manager = useContext(PostContext)
  const { editDesc } = useEditDesc(id, editText)

  const setEdit = () => {
    editDesc()
    manager?.setOpenedittext(false)
  }

  return (
    <div className={open ? 'block my-5' : 'hidden'}>
      <input
        className=" w-1/3 py-2 pr-4 bg-transparent text-white border-b border-purple outline-none"
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <ButtonEmpty classname="-ml-3" text={'Save'} fn={setEdit} />
      <ButtonGradient classname=" ml-3" text="Cancel" fn={() => manager?.setOpenedittext(false)} />
    </div>
  )
}

export default Description
