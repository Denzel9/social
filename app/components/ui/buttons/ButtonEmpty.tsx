import classnames from 'classnames'
import { FunctionComponent } from 'react'

const ButtonEmpty: FunctionComponent<{ text: string; classname?: string; fn?(): void }> = ({
  text,
  classname,
  fn,
}) => {
  return (
    <button
      onClick={fn}
      className={classnames(
        classname,
        ' text-purple border-purple border py-2 px-4 rounded-lg hover:bg-purple transition-colors hover:text-white'
      )}
    >
      {text}
    </button>
  )
}

export default ButtonEmpty
