import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { addUser } from '../redux/reducer/user'
import { UserService } from '../services/users.service'
import { IAuth } from '../types/user.types'
import { useDispatch } from 'react-redux'

export const useAuth = () => {
  const dispatch = useDispatch()
  const auth = getAuth()

  function handleSign(data: IAuth) {
    signInWithEmailAndPassword(auth, data.email, data.password).then(({ user }) => {
      dispatch(
        addUser({
          email: data.email,
          password: data.password,
          authId: user.uid,
        })
      )
    })
  }

  const handleRegistr = (data: IAuth) => {
    createUserWithEmailAndPassword(auth, data.email, data.password).then(({ user }) => {
      dispatch(
        addUser({
          email: user.email,
          authId: user.uid,
        })
      )
      UserService.addUser({
        email: data.email,
        authId: user.uid,
        avatar: '',
        name: '',
        banner: '',
        nickname: '',
        followers: [],
        following: [],
        Buncoins: 0,
        supporters: [],
        notification: [],
        liked: [],
      })
    })
  }

  return { handleSign, handleRegistr }
}
