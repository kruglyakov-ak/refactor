import { FC, ReactNode } from 'react'
import cn from 'classnames'

import s from './footer.module.scss'

interface IFooterProps {
  children?: ReactNode
  className?: string
}

export const Footer: FC<IFooterProps> = ({ children, className }) => {
  return (
    <footer className={cn(s.footer, className)}>
      {children}

      <div className={s.copyright}>
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
