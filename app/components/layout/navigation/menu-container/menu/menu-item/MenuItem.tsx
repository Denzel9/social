import { MaterialIcon } from '@/app/components/ui/icons/MaterialIcon'
import { TypeMaterialIconName } from '@/app/types/icons.types'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'

const MenuItem: FunctionComponent<{ icon: TypeMaterialIconName; link: string }> = ({
  icon,
  link,
}) => {
  const { pathname } = useRouter()
  return (
    <Link
      href={link}
      className={classNames(
        pathname === link ? 'bg-pagesBG text-purple' : '',
        'text-gray text-2xl hover:bg-pagesBG hover:text-purple w-[105px] py-3 pl-8 rounded-bl-2xl rounded-tl-2xl transition-colors'
      )}
    >
      <MaterialIcon name={icon} />
    </Link>
  )
}

export default MenuItem
