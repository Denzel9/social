import { FunctionComponent } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ISkeleton {
  circle: boolean
  width: number
  height: number
}

const SkeletonLoader: FunctionComponent<ISkeleton> = (props) => {
  return (
    <>
      <Skeleton baseColor=" #272932" {...props} />
    </>
  ) // Five-line loading skeleton
}

export default SkeletonLoader
