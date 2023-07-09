import ButtonGradient from '@/app/components/ui/buttons/ButtonGradient'
import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { FunctionComponent } from 'react'

const ButtonGroup: FunctionComponent<{
  type: string
  setType(type: 'title' | 'img'): void
  handleClick(): void
}> = ({ type, setType, handleClick }) => {
  return (
    <div className=" flex items-center gap-5">
      {type === 'title' ? (
        <button
          className=" p-2 rounded-lg bg-purple bg-opacity-30 text-2xl transition-colors hover:bg-opacity-100"
          onClick={() => setType('img')}
        >
          <MaterialIcon name="MdOutlineImage" />
        </button>
      ) : (
        <button
          className=" p-2 rounded-lg bg-purple bg-opacity-30 text-2xl transition-colors hover:bg-opacity-100"
          onClick={() => setType('title')}
        >
          <MaterialIcon name="MdOutlineTextFormat" />
        </button>
      )}

      <ButtonGradient text={'Create'} fn={handleClick} />
    </div>
  )
}

export default ButtonGroup
