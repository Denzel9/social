import { FunctionComponent } from 'react'

const BlockItem: FunctionComponent<{ title: string; text: string | number }> = ({
  title,
  text,
}) => {
  return (
    <div className=" bg-pagesBG w-[150px] h-[50px] rounded-lg p-3 flex items-center justify-around mt-2">
      <div>{title}</div>
      <div className=" ml-3">{text}</div>
    </div>
  )
}

export default BlockItem
