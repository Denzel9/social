import { FunctionComponent, memo, useState } from 'react'
import { Wheel } from 'react-custom-roulette'

import ButtonEmpty from '../../ui/buttons/ButtonEmpty'

interface Spinprops {
  mustSpin: boolean
  setMustSpin(spin: boolean): void
  prizeNumber: number
  setPrizeNumber(num: number): void
}

const Spin: FunctionComponent<Spinprops> = ({
  mustSpin,
  setMustSpin,
  setPrizeNumber,
  prizeNumber,
}) => {
  if (typeof window === 'undefined') return null
  const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'white' } },
    { option: '2' },
  ]

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
    }
  }

  return (
    <div className=" relative rounded-lg w-3/4 h-[500px] bg-gradient-to-t from-purple to-purpleToGrad overflow-hidden">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false)
        }}
      />

      <button onClick={handleSpinClick}>SPIN</button>
    </div>
  )
}

export default memo(Spin)
