import { FunctionComponent } from 'react'

const Liked: FunctionComponent<{ liked: string[] }> = ({ liked }) => {
  return (
    <div className=" flex items-center">
      {liked?.length ? (
        <button className=" ml-3">
          Liked by <span className=" text-purple">{liked[0]}</span>{' '}
          {liked.length === 1 ? '' : `and ${liked.length - 1} others`}
        </button>
      ) : (
        'No likes yet'
      )}
    </div>
  )
}

export default Liked
