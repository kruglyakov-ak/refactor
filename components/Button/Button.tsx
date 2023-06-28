import { MouseEvent, FC, ReactNode } from 'react'
import cn from 'classnames'

import { CustomLink } from 'components'

import s from './button.module.scss'

interface IButtonProps {
  children: ReactNode
  disabled?: boolean
  onClick?: (evt: MouseEvent<HTMLElement>) => void
  href?: string
  className?: string
}

export const Button: FC<IButtonProps> = ({
  className,
  href = '',
  children,
  onClick,
  disabled,
}) => {
  const clickHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault()
    onClick && !disabled && onClick(evt)
  }

  return href !== '' && !disabled ? (
    <CustomLink
      href={href}
      className={cn(s.button, className)}
      onClick={clickHandler}
    >
      {children}
    </CustomLink>
  ) : (
    <button
      type="button"
      className={cn(s.button, { [s.disabled]: disabled }, className)}
      onClick={clickHandler}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
