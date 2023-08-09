import RangeItem from '@/app/shared/range-item/RangeItem'
import { IPetsRanges } from '@/app/types/pets.types'
import { FunctionComponent } from 'react'

const StatRange: FunctionComponent<{ range: IPetsRanges[] }> = ({ range }) => {
  return (
    <div className=" grid grid-cols-2 gap-3">
      {range?.map((item) => {
        return <RangeItem key={item.text} text={item?.text} range={item?.value} width={300} />
      })}
    </div>
  )
}

export default StatRange
