import { ICreatePost } from '@/app/types/posts.types'
import { FunctionComponent } from 'react'

const Input: FunctionComponent<ICreatePost> = ({ name, setValue, value }) => {
  return (
    <input
      className=" mt-5 h-10 outline-none bg-pagesBG px-4 rounded-lg w-full"
      type="text"
      placeholder={name}
      value={value.name}
      name={name}
      onChange={(e) => setValue({ ...value, [name]: e.target.value })}
    />
  )
}

export default Input
