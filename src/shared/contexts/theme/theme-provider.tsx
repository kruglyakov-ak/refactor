'use client'

import { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import { THEME_MODE } from 'shared/constants'
import { ThemeContext } from '.'

interface ThemePropsInterface {
  children: ReactNode
}

const ThemeProvider: FC<ThemePropsInterface> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const isLocalStorageEmpty = (): boolean => {
    return !localStorage.getItem('isDarkTheme')
  }

  const initialThemeHandler = () => {
    if (isLocalStorageEmpty()) {
      localStorage.setItem('isDarkTheme', `true`)
      document.documentElement.classList.add(THEME_MODE.DARK)
      setIsDarkTheme(true)
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem('isDarkTheme')!
      )
      isDarkTheme
        ? document.documentElement.classList.add(THEME_MODE.DARK)
        : document.documentElement.classList.add(THEME_MODE.LIGHT)
      setIsDarkTheme(() => {
        return isDarkTheme
      })
    }
  }

  useEffect(() => initialThemeHandler())

  const toggleDarkClassToRoot = () => {
    document.documentElement.classList.toggle(THEME_MODE.DARK)
    document.documentElement.classList.toggle(THEME_MODE.LIGHT)
  }

  const setValueToLocalStorage = useCallback(() => {
    localStorage.setItem('isDarkTheme', `${!isDarkTheme}`)
  }, [isDarkTheme])

  const toggleThemeHandler = useCallback(() => {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem('isDarkTheme')!
    )
    setIsDarkTheme(!isDarkTheme)
    toggleDarkClassToRoot()
    setValueToLocalStorage()
  }, [setValueToLocalStorage])

  return (
    <ThemeContext.Provider
      value={{ isDarkTheme: isDarkTheme, toggleThemeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
