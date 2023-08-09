import classNames from 'classnames'
import { FunctionComponent } from 'react'

const RangeItem: FunctionComponent<{ text: string; range: number; width: number }> = ({
  text,
  range,
  width,
}) => {
  return (
    <div>
      <div className=" text-xs">{text}</div>
      <div
        className=" w-[300px] h-5 bg-purpleToGrad rounded-full mt-2"
        style={{ width: `${width}px` }}
      >
        <div
          className=" h-full bg-purple rounded-full text-right text-sm pr-3"
          style={{ width: `${range! * (width! / 100)}px` }}
        >
          {range}%
        </div>
      </div>
    </div>
  )
}

export default RangeItem
