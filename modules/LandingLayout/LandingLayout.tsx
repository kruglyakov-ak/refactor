import { FC, ReactNode } from 'react'

import { Footer, Header } from 'modules'

import s from './landingLayout.module.scss'

interface LandingLayoutProps {
  children: ReactNode
  heading?: string
}

export const LandingLayout: FC<LandingLayoutProps> = ({
  heading,
  children,
}) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>
        {heading && <h1 className={s.title}>{heading}</h1>}
        {children}
      </main>
      <Footer />
    </div>
  )
}
