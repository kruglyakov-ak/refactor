'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

import { CustomLink } from 'components'
import s from './navigation-item.module.scss'

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
