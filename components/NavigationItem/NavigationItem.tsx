import { FC } from 'react'
import cn from 'classnames'

import s from './navigationItem.module.scss'
import { CustomLink } from 'components'

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
  return (
    <li className={cn(s.listItem, className)}>
      <CustomLink href={link}>{title}</CustomLink>
    </li>
  )
}

