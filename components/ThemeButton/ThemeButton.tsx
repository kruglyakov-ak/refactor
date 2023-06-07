'use client'

import { usePathname } from 'next/navigation'
import { FC, useContext } from 'react'
import cn from 'classnames'

import { APP_ROUTER_PATHS } from 'shared/constants'
import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'

import { ThemeContext } from 'store/Theme'

import s from './themeButton.module.scss'

export const ThemeButton: FC = () => {
  const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext)
  const pathname = usePathname()
  const isMainPage = pathname === APP_ROUTER_PATHS.MAIN && isDarkTheme

  const themeButtonClickHandler = (): void => {
    toggleThemeHandler()
  }

  return (
    <button
      type={'button'}
      onClick={themeButtonClickHandler}
      className={cn(s.button, {
        [s.mainPageWrapper]: isMainPage,
        [s.darkMode]: isDarkTheme,
      })}
    >
      <div className={cn(s.iconWrapper, s.dark)}>
        <MoonIcon className={s.moonIcon} />
      </div>

      <div className={cn(s.iconWrapper, s.light)}>
        <SunIcon className={s.sunIcon} />
      </div>
    </button>
  )
}
