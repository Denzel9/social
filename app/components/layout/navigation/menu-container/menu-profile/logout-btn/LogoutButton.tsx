import { FunctionComponent } from 'react'

import { UserButton } from '@clerk/nextjs'

const LogoutButton: FunctionComponent = () => {
  return (
    <div className=" mr-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default LogoutButton
