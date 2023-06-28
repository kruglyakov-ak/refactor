import { FC, ReactNode } from 'react'
import cn from 'classnames'

import s from './container.module.scss'

interface IContainerProps {
  children: ReactNode
  className?: string
}

export const Container: FC<IContainerProps> = ({ children, className }) => {
  return <div className={cn(s.container, className)}>{children}</div>
}
