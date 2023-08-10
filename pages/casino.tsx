import dynamic from 'next/dynamic'
import { FunctionComponent } from 'react'

const DynamicComponentWithNoSSR = dynamic(
  () => import('@/app/components/screens/casino/CasinoPage'),
  { ssr: false }
)

const Casino: FunctionComponent = () => {
  return <DynamicComponentWithNoSSR />
}

export default Casino
