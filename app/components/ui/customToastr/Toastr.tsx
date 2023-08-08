import { FunctionComponent, useContext } from 'react'
import { MaterialIcon } from '../icons/MaterialIcon'
import classNames from 'classnames'
import { ToastrContext } from '@/app/context/ToastrContext'

const Toastr: FunctionComponent = () => {
  const toastr = useContext(ToastrContext)

  toastr?.openToastr && setTimeout(() => toastr?.setOpenToastr(false), 5000)
  return (
    <div
      className={classNames(
        toastr?.openToastr ? ' opacity-100' : ' opacity-0 pointer-events-none',
        ' z-40 fixed flex justify-center bottom-0 w-full h-20 bg-transparent'
      )}
    >
      <div
        className={classNames(
          toastr?.openToastr ? ' translate-y-0 ' : ' translate-y-96 ',
          ' relative bg-pagesBG w-96 h-20 border-t duration-500 border-purple rounded-tl-full rounded-tr-full py-5 text-white '
        )}
      >
        <div className=" text-center text-xl">Post has been created!</div>
        <button
          className=" p-2 bg-purple rounded-full absolute right-2 top-2 hover:scale-110 transition-transform"
          onClick={() => toastr?.setOpenToastr(false)}
        >
          <MaterialIcon name="MdOutlineClose" />
        </button>
      </div>
    </div>
  )
}

export default Toastr
