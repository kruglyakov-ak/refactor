import { FC, ReactNode, useEffect, useState } from 'react'
import ThemeContext from './ThemeContext'
import { COLOR_THEME } from 'shared/constants'

interface ThemePropsInterface {
  children: ReactNode
}

export const ThemeContextProvider: FC<ThemePropsInterface> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const isLocalStorageEmpty = (): boolean => {
    return !localStorage.getItem('isDarkTheme')
  }

  const initialThemeHandler = (): void => {
    if (isLocalStorageEmpty()) {
      localStorage.setItem('isDarkTheme', `true`)
      document.documentElement.classList.add(COLOR_THEME.DARK)
      setIsDarkTheme(true)
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem('isDarkTheme')!
      )
      isDarkTheme
        ? document.documentElement.classList.add(COLOR_THEME.DARK)
        : document.documentElement.classList.add(COLOR_THEME.LIGHT)
      setIsDarkTheme(() => {
        return isDarkTheme
      })
    }
  }

  useEffect(() => initialThemeHandler())

  const toggleDarkClassToRoot = (): void => {
    document.documentElement.classList.toggle(COLOR_THEME.DARK)
    document.documentElement.classList.toggle(COLOR_THEME.LIGHT)
  }

  const setValueToLocalStorage = (): void => {
    localStorage.setItem('isDarkTheme', `${!isDarkTheme}`)
  }

  const toggleThemeHandler = (): void => {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem('isDarkTheme')!
    )
    setIsDarkTheme(!isDarkTheme)
    toggleDarkClassToRoot()
    setValueToLocalStorage()
  }

  return (
    <ThemeContext.Provider
      value={{ isDarkTheme: isDarkTheme, toggleThemeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
