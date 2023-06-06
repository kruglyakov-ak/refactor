import { createContext } from 'react'

const ThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
})

export default ThemeContext
