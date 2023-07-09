import { FunctionComponent } from 'react'

const PersonalInfo: FunctionComponent<{ email: string; date: string }> = ({ email, date }) => {
  return (
    <div className="text-sm mt-5 opacity-30">
      {email ? <div>Email: {email}</div> : <div>Edit email</div>}
      {date ? <div>Account created: {date?.slice(0, 10)}</div> : <div>Account created...</div>}
    </div>
  )
}

export default PersonalInfo
