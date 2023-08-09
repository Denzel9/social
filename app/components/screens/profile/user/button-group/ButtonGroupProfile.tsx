import ButtonGradient from '@/app/components/ui/buttons/ButtonGradient'
import SubsButton from '@/app/components/ui/buttons/SubsButton'
import TipsButton from '@/app/components/ui/buttons/TipsButton'
import { UserContext } from '@/app/context/UserContext'
import { IUser } from '@/app/types/user.types'
import { FunctionComponent, useContext } from 'react'

const ButtonGroupProfile: FunctionComponent<{ person: IUser }> = ({ person }) => {
  const user = useContext(UserContext)

  return (
    <div className=" text-white flex gap-3 w-[350px] mt-5 mx-auto">
      <SubsButton
        id={user?.id!}
        anoterId={person?.id!}
        following={user?.following}
        followers={person?.followers}
      />
      <TipsButton person={person!} />
      <ButtonGradient text={'Message'} />
    </div>
  )
}

export default ButtonGroupProfile
