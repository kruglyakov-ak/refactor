import { FC } from 'react'
import cn from 'classnames'
import { usePathname } from 'next/navigation'

import { LandingNavigation, UserMenu } from 'features'

import {
  Container,
  Header,
  MainLogo,
  ThemeButton,
} from 'components'

import { APP_ROUTER_PATHS } from 'shared/constants'

import s from './landingHeader.module.scss'

interface ILandingHeaderProps {
  className?: string
}

export const LandingHeader: FC<ILandingHeaderProps> = ({ className }) => {
  const pathname = usePathname()

  return (
    <Header className={cn(s.header, className)}>
      <Container className={s.container}>
        <div className={s.leftContent}>
          {pathname !== APP_ROUTER_PATHS.MAIN && (
            <MainLogo className={s.logo} />
          )}
          <LandingNavigation />
        </div>

        <div className={s.rightContent}>
          <UserMenu className={s.userMenu}/>
          <ThemeButton />
        </div>
      </Container>
    </Header>
  )
}
