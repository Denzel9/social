import { FunctionComponent } from 'react'
import Image from 'next/image'

import coinBig from '@/public/coinBig.png'
import coin from '@/public/coin.jpg'

const CoinsItem: FunctionComponent = () => {
  return (
    <div className=" w-full h-48 bg-navBG rounded-lg p-5 flex flex-col justify-between cursor-pointer transition-colors hover:bg-gradient-to-b from-purple to-purpleToGrad">
      <div className="flex items-center justify-center gap-3 ">
        <Image src={coin} alt={'coin'} width={30} height={30} />
        <span>5 Coins</span>
      </div>
      <Image className=" mx-auto mt-5" src={coinBig} alt={'coin'} width={100} height={100} />
      <div className=" flex items-center justify-between">
        <span>Handfull of Buncoin</span>
        <span className="font-black text-xl">$4.99</span>
      </div>
    </div>
  )
}

export default CoinsItem
