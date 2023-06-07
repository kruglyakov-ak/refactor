import { FC } from 'react'
import cn from 'classnames'
import { usePathname } from 'next/navigation'
import { LandingNavigation } from 'features'

import { Container, Header, MainLogo, ThemeButton } from 'components'

import s from './landingHeader.module.scss'
import { APP_ROUTER_PATHS } from 'shared/constants'

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
          <ThemeButton />
        </div>
      </Container>
    </Header>
  )
}

