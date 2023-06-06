import { FC } from 'react'
import cn from 'classnames'

import { Header, MainLogo } from 'components'

import s from './landingHeader.module.scss'

interface ILandingHeaderProps {
  className?: string
}

export const LandingHeader: FC<ILandingHeaderProps> = ({ className }) => {
  return (
    <Header className={cn(s.header, className)}>
      <MainLogo className={s.logo} />
    </Header>
  )
}
