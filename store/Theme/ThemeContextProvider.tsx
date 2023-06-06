import { ReactElement, useEffect, useState } from 'react'
import ThemeContext from './ThemeContext'

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>
}

export const ThemeContextProvider = ({
  children,
}: ThemePropsInterface): ReactElement => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const isLocalStorageEmpty = (): boolean => {
    return !localStorage.getItem('isDarkTheme')
  }

  const initialThemeHandler = (): void => {
    if (isLocalStorageEmpty()) {
      localStorage.setItem('isDarkTheme', `true`)
      document.documentElement.classList.add('dark')
      setIsDarkTheme(true)
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem('isDarkTheme')!
      )
      isDarkTheme
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.add('light')
      setIsDarkTheme(() => {
        return isDarkTheme
      })
    }
  }

  useEffect(() => initialThemeHandler())

  const toggleDarkClassToRoot = (): void => {
    document.documentElement.classList.toggle('dark')
    document.documentElement.classList.toggle('light')
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

