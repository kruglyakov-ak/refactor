'use client'

import { FC } from 'react'
import cn from 'classnames'
import { usePathname } from 'next/navigation'

import { Container, Header, MainLogo, ThemeButton } from 'components'

import { ROUTER_PATHS } from 'shared/constants'

import { Navigation, AuthUserMenu, LocalSelect } from './components'

import s from './landing-header.module.scss'

interface ILandingHeaderProps {
  className?: string
}

export const LandingHeader: FC<ILandingHeaderProps> = ({ className }) => {
  const pathname = usePathname()

  return (
    <Header className={cn(s.header, className)}>
      <Container className={s.container}>
        <div className={s.leftContent}>
          {pathname !== ROUTER_PATHS.MAIN && <MainLogo className={s.logo} />}
          <Navigation />
        </div>

        <div className={s.rightContent}>
          <AuthUserMenu className={s.userMenu} />
          <LocalSelect className={s.localSelect} />
          <ThemeButton />
        </div>
      </Container>
    </Header>
  )
}
