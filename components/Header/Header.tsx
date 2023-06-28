import { FC, ReactNode } from 'react'
import cn from 'classnames'

import s from './header.module.scss'

interface IHeaderProps {
  children?: ReactNode
  className?: string
}

export const Header: FC<IHeaderProps> = ({ children, className }) => {
  return <header className={cn(s.header, className)}>{children}</header>
}
