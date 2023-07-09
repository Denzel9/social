import { FunctionComponent } from 'react'
import CreateNewsInput from './create-news-input/CreateNewsInput'

const CreateNews: FunctionComponent = () => {
  return (
    <div className=" w-full h-56 bg-gradient-to-b from-purple to-purpleToGrad rounded-lg p-5 text-white">
      <p>Newsfeed</p>
      <h2 className=" text-3xl font-bold">Check what your friends up to!</h2>
      <p className=" text-xs w-3/4 mt-3">
        Conveniently customize proactive web services for leveraged without continualliery aggregate
        fricctionle ou wellies richard.and very customize continually.
      </p>
      <CreateNewsInput />
    </div>
  )
}

export default CreateNews
