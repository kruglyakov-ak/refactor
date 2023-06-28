'use client'

import { FC, ReactNode } from 'react'

import { LandingHeader } from 'features'

import s from './landingLayout.module.scss'

interface LandingLayoutProps {
  children?: ReactNode
  title?: string
}

export const LandingLayout: FC<LandingLayoutProps> = ({ title, children }) => {
  return (
    <>
      <LandingHeader />
      <main className={s.main}>
        {title && <h1 className={s.title}>{title}</h1>}
        {children}
      </main>
    </>
  )
}
