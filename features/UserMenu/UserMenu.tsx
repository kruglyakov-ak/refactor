import { FC } from 'react'
import cn from 'classnames'

import { LoginButton, RegistrationButton } from 'components'

import s from './userMenu.module.scss'

interface IUserMenuProps {
  className?: string
}

export const UserMenu: FC<IUserMenuProps> = ({ className }) => {
  return (
    <div className={cn(s.userMenu, className)}>
      <RegistrationButton />
      <LoginButton />
    </div>
  )
}
