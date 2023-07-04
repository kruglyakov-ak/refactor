'use client'

import { LandingHeader } from 'components/landing-header/landing-header'
import { FC, ReactNode } from 'react'

import s from './landing.module.scss'

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
