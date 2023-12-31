import ButtonEmpty from '@/app/components/ui/buttons/ButtonEmpty'
import { ModalCoinsContext } from '@/app/context/ModalCoinsContext'
import { FunctionComponent, useContext } from 'react'

const LevelRange: FunctionComponent<{ range: number }> = ({ range }) => {
  const { openModal, setModal } = useContext(ModalCoinsContext)
  return (
    <div className="text-white flex items-center justify-between mt-8 px-5">
      <div>Level 2</div>
      <div className=" bg-purpleToGrad w-[600px] h-6 rounded-full">
        <div
          style={{ width: `${6 * range}px` }}
          className={
            ' bg-gradient-to-b from-purple to-purpleToGrad h-full rounded-full text-right pr-4'
          }
        >
          {range}%
        </div>
      </div>
      <ButtonEmpty
        fn={() => setModal('pro')}
        text={' Pro Pass'}
        classname=" text-white border-white hover:bg-purple"
      />
    </div>
  )
}

export default LevelRange
