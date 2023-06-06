'use client'

import { FC, ReactNode, useState } from 'react'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

import { APP_ROUTER_PATHS } from 'shared/constants'

import s from './mainHeader.module.scss'

interface HeaderProps {
  logo?: ReactNode
}

export const Header: FC<HeaderProps> = ({logo}) => {
  const pathname = usePathname()
  const [isMenuShow, setIsMenuShow] = useState(false)
  const isHomePage = pathname === APP_ROUTER_PATHS.MAIN

  return (
    <div
      className={cn(s.wrapper, {
        [s.homePage]: isHomePage,
        [s.menuShown]: isMenuShow,
      })}
    >
      <div className={s.leftContent}>{!isHomePage && logo}</div>
      <header className={s.header}></header>
    </div>
  )
}
