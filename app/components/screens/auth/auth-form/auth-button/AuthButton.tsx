import { FunctionComponent } from 'react'

const AuthButton: FunctionComponent<{ text: string; setType(string: string): void }> = ({
  text,
  setType,
}) => {
  return (
    <button
      onClick={() => setType('register')}
      className="mt-5 border-pagesBG border py-2 px-4 text-center rounded-full hover:bg-pagesBG transition-colors "
    >
      {text}
    </button>
  )
}

export default AuthButton
