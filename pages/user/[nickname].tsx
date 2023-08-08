import UserPage from '@/app/components/screens/user/UserPage'
import { UserService } from '@/app/services/users.service'
import { IUser } from '@/app/types/user.types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FunctionComponent } from 'react'

const User: FunctionComponent<{ user: IUser[] }> = ({ user }) => {
  return user ? <UserPage user={user[0]} /> : null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const user = await UserService.getAllUser()
  const paths = user.map((item) => ({
    params: { nickname: item.nickname },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const nickname = context?.params?.nickname
  const user = await UserService.getUser(String(nickname))

  return { props: { user } }
}

export default User
