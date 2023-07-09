import { FunctionComponent } from 'react'
import CreateNews from './create-news/CreateNews'
import NewsList from './news-list/NewsList'

const News: FunctionComponent = () => {
  return (
    <div className=" w-[870px]">
      <CreateNews />
      <NewsList />
    </div>
  )
}

export default News
