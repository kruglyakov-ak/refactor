import { FC } from 'react'
import cn from 'classnames'

import { LoginButton, RegistrationButton } from 'components'

import s from './authUserMenu.module.scss'

interface IAuthUserMenuProps {
  className?: string
}

export const AuthUserMenu: FC<IAuthUserMenuProps> = ({ className }) => {
  return (
    <div className={cn(s.userMenu, className)}>
      <RegistrationButton />
      <LoginButton />
    </div>
  )
}
