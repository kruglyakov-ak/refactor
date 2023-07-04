import Link, { LinkProps } from 'next/link'
import { FC, ReactNode } from 'react'
import cn from 'classnames'

import s from './custom-link.module.scss'

interface ICustomLinkProps extends LinkProps {
  children: ReactNode
  className?: string
}

export const CustomLink: FC<ICustomLinkProps & LinkProps> = (props) => {
  const { children, className } = props

  return (
    <Link
      className={cn(s.link, className)}
      {...props}
    >
      {children}
    </Link>
  )
}
