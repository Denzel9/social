import { FunctionComponent } from 'react'
import ButtonGradient from './ButtonGradient'
import { useNotificationUser, useSubUser, useSubsUser } from '@/app/hooks/user/useUser'
import { MaterialIcon } from '../icons/MaterialIcon'

interface SubsButtonProps {
  id: string
  anoterId: string
  following: string[]
  followers: string[]
}

const SubsButton: FunctionComponent<SubsButtonProps> = ({ following, followers, id, anoterId }) => {
  const { updateSub } = useSubUser(id)
  const { updateSubs, isLoading } = useSubsUser(anoterId)
  const { notificationFoll, notificationUnfoll } = useNotificationUser(anoterId)

  const handleAdd = () => {
    following?.push(anoterId)
    followers?.push(id)
    updateSub(following)
      .then(() => updateSubs(followers))
      .then(() => notificationFoll())
  }

  const handleDelete = () => {
    const newFollowing = following?.filter((item) => item !== anoterId)
    const newFollowers = followers?.filter((item) => item !== id)
    updateSub(newFollowing)
      .then(() => updateSubs(newFollowers))
      .then(() => notificationUnfoll())
  }

  return (
    <div>
      {following?.includes(anoterId) ? (
        isLoading ? (
          <div className=" animate-spin">
            <MaterialIcon name="MdFlipCameraAndroid" />
          </div>
        ) : (
          <ButtonGradient text="Unfollow" fn={handleDelete} />
        )
      ) : isLoading ? (
        <div className=" animate-spin">
          <MaterialIcon name="MdFlipCameraAndroid" />
        </div>
      ) : (
        <ButtonGradient text="Follow" fn={handleAdd} />
      )}
    </div>
  )
}

export default SubsButton
