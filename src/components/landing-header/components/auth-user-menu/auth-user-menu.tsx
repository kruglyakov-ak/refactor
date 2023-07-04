import { FC } from 'react'
import cn from 'classnames'

import { LoginButton, RegistrationButton } from './components'
import s from './auth-user-menu.module.scss'

interface IAuthUserMenuProps {
  className?: string
}

export const AuthUserMenu: FC<IAuthUserMenuProps> = ({ className }) => {
  return (
    <div className={cn(s.authUserMenu, className)}>
      <RegistrationButton />
      <LoginButton />
    </div>
  )
}
