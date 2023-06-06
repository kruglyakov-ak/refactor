'use client'

import { FC, ReactNode } from 'react'
import { ThemeContextProvider } from 'store/Theme'

interface ProvidersProps {
  children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>
}

