import classNames from 'classnames'
import { FunctionComponent } from 'react'

const ButtonGradient: FunctionComponent<{ text: string; classname?: string; fn?(): void }> = ({
  text,
  classname,
  fn,
}) => {
  return (
    <button
      onClick={fn}
      className={classNames(
        classname,
        ' px-6 py-2 bg-gradient-to-b from-purple to-purpleToGrad rounded-lg  hover:bg-gradient-to-t '
      )}
    >
      {text}
    </button>
  )
}

export default ButtonGradient
