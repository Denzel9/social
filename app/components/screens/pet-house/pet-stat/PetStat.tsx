import { FunctionComponent } from 'react'
import StatBlocks from './stat-blocks/StatBlocks'
import StatRange from './stat-range/StatRange'
import { IPetsRanges } from '@/app/types/pets.types'

const PetStat: FunctionComponent<{ stats: IPetsRanges[]; range: IPetsRanges[] }> = ({
  stats,
  range,
}) => {
  return (
    <div className=" mt-5">
      <div>STATS</div>
      <div className=" flex gap-10 items-center">
        <StatBlocks stats={stats} />
        <StatRange range={range} />
      </div>
    </div>
  )
}

export default PetStat
