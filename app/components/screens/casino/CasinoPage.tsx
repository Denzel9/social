import { FunctionComponent, useContext, useState } from 'react'
import Image from 'next/image'
import { UserContext } from '@/app/context/UserContext'

import coin from '@/public/coin.jpg'

import Spin from './Spin'

const CasinoPage: FunctionComponent = () => {
  const { user } = useContext(UserContext)
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)

  return (
    <section className=" w-full">
      <div className=" w-full h-32 bg-navBG rounded-lg p-5 text-white">
        <h1 className=" text-3xl font-black">Gamer Roulettee</h1>
        <p className=" opacity-50 text-xs mt-5 w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt
          ut labore et dolore magna aliqua. Olor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incidi dunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className=" mt-5 flex items-start justify-between gap-5">
        <div className=" rounded-lg w-1/5 h-64 bg-gradient-to-b from-purple to-purpleToGrad p-5 text-center text-white">
          <Image
            className=" rounded-full border-4 border-white mx-auto"
            src={user?.avatar}
            alt={'user'}
            width={80}
            height={80}
          />
          <p className=" text-lg mt-5">{user?.name}</p>
          <p>{user?.nickname}</p>
          <div className=" flex gap-3 items-center justify-center mt-5">
            <Image className=" rounded-full" src={coin} alt={'coin'} width={30} height={30} />
            <p>{user?.Buncoins}</p>
          </div>
        </div>
        <Spin
          mustSpin={mustSpin}
          setMustSpin={setMustSpin}
          prizeNumber={prizeNumber}
          setPrizeNumber={setPrizeNumber}
        />
        <div className=" rounded-lg w-1/5 h-64 bg-gradient-to-b from-purple to-purpleToGrad p-5"></div>
      </div>
    </section>
  )
}

export default CasinoPage
