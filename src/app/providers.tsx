'use client'

import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'shared/contexts'

interface ProvidersProps {
  children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
