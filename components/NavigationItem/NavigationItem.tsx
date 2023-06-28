import { FC } from 'react'
import cn from 'classnames'

import s from './navigationItem.module.scss'
import { CustomLink } from 'components'
import { usePathname } from 'next/navigation'

interface INavigationItem {
  title: string
  link: string
  className?: string
}

export const NavigationItem: FC<INavigationItem> = ({
  link,
  title,
  className,
}) => {
  const pathname = usePathname()
  const isActiveLink = pathname === link

  return (
    <li className={cn(s.listItem, className)}>
      <CustomLink
        className={cn(s.link, { [s.active]: isActiveLink })}
        href={link}
      >
        {title}
      </CustomLink>
    </li>
  )
}
