import { IUser } from '@/app/types/user.types'

const followers = 10
const following = 20
const addLke = 5
const addComment = 7
const addFavorites = 10
const wallet = 0

const one =
  'create fn and update Buncoins if user click like(+5 Buncoins) or send comment(+7 Buncoins)'
const two = 'each field in profile + 5 Buncoins' && 'create notification field about empty field'
const three = ''

export const getBuncoins = (user: IUser) => {
  const buncoins =
    user?.followers?.length * 10 +
    user?.following?.length * 20 +
    user?.supporters?.length * 7 +
    +!!user?.avatar.length * 5 +
    +!!user?.banner.length * 5 +
    +!!user?.name.length * 5 +
    +!!user?.nickname.length * 5

  return buncoins
}
