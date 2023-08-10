import ButtonGradient from '@/app/components/ui/buttons/ButtonGradient'
import SubsButton from '@/app/components/ui/buttons/SubsButton'
import TipsButton from '@/app/components/ui/buttons/TipsButton'
import { UserContext } from '@/app/context/UserContext'
import { useGetUser } from '@/app/hooks/user/useUser'
import { FunctionComponent, useContext } from 'react'

const ButtonGroupProfile: FunctionComponent = () => {
  const { user } = useContext(UserContext)
  const { currentUser, path } = useGetUser()

  return (
    path && (
      <div className=" text-white flex gap-3 w-[350px] mt-5 mx-auto">
        <SubsButton
          id={user?.id!}
          anoterId={currentUser?.id!}
          following={user?.following!}
          followers={currentUser?.followers!}
        />
        <TipsButton person={currentUser!} />
        <ButtonGradient text={'Message'} />
      </div>
    )
  )
}

export default ButtonGroupProfile
