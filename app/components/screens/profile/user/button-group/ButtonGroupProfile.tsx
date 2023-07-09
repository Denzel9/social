import ButtonGradient from '@/app/components/ui/buttons/ButtonGradient'
import { FunctionComponent } from 'react'

const ButtonGroupProfile: FunctionComponent = () => {
  return (
    <div className=" text-white flex gap-3 w-[350px] mt-5 mx-auto">
      <ButtonGradient text={'Subscribe'} />
      <ButtonGradient text={'Follow'} />
      <ButtonGradient text={'Message'} />
    </div>
  )
}

export default ButtonGroupProfile
