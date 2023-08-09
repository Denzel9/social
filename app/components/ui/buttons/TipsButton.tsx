import { FunctionComponent, useState } from 'react'
import ButtonGradient from './ButtonGradient'
import classNames from 'classnames'
import { useUpdateTipsUser } from '@/app/hooks/user/useUser'
import { IUser } from '@/app/types/user.types'

const TipsButton: FunctionComponent<{ person: IUser }> = ({ person }) => {
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState('')
  const { update } = useUpdateTipsUser(person?.id!, person, +count!)
  const handleClick = () => {
    update()
    setCount('0')
    setOpen(false)
  }
  return (
    <div>
      <ButtonGradient text={'Tips'} fn={() => setOpen(true)} />

      <div
        className={classNames(
          open ? ' opacity-100 pointer-events-auto duration-500' : ' opacity-0 pointer-events-none',
          '  bg-navBG fixed bottom-0 left-0 right-0 w-full h-full z-30 bg-opacity-50 flex flex-col justify-end'
        )}
        onClick={() => setOpen(false)}
      >
        <div
          className={classNames(
            open ? 'translate-y-0 duration-500' : ' translate-y-56',
            'bg-navBG border-t border-purple w-full h-44 flex items-center'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className=" w-2/4 mx-auto">
            <div className=" flex items-end gap-5 text-xl mb-5">
              <button
                className=" transition-colors hover:text-purple"
                onClick={() => setCount('20')}
              >
                20
              </button>
              <button
                className=" transition-colors hover:text-purple"
                onClick={() => setCount('60')}
              >
                60
              </button>
              <button
                className=" transition-colors hover:text-purple"
                onClick={() => setCount('100')}
              >
                100
              </button>
              <p className=" text-base opacity-70">or choose your own number</p>
            </div>
            <div className=" flex items-center">
              <input
                className=" bg-transparent border-b border-purple h-10 w-4/5 outline-none"
                type="number"
                placeholder="Give tips"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              <ButtonGradient classname=" -ml-6" text={'Give tips'} fn={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TipsButton
