import { FunctionComponent } from 'react'
import BlockItem from './block-item/BlockItem'
import { IPetsRanges } from '@/app/types/pets.types'

const StatBlocks: FunctionComponent<{ stats: IPetsRanges[] }> = ({ stats }) => {
  return (
    <div>
      {stats?.map((item) => {
        return <BlockItem key={item.text} title={item?.text} text={item?.value} />
      })}
    </div>
  )
}

export default StatBlocks
