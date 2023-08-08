import Link from 'next/link'
import { FunctionComponent } from 'react'

const NotFound: FunctionComponent = () => {
  return (
    <div className=" w-full text-white">
      <p className=" text-6xl">Oops...</p>
      <h1 className=" text-4xl  mb-16">Pages not found</h1>
      <Link
        className=" border rounded-lg py-4 px-8 hover:bg-gray hover:bg-opacity-20 transition-colors"
        href={'/'}
      >
        Go home
      </Link>
    </div>
  )
}

export default NotFound
