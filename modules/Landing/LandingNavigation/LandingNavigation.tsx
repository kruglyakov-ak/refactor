import { FC } from 'react'
import cn from 'classnames'

import { NavigationItem } from 'components'

import { LANDING_NAV_ITEMS } from 'shared/constants'

import s from './landingNavigation.module.scss'

interface ILandingNavigationProps {
  className?: string
}

export const LandingNavigation: FC<ILandingNavigationProps> = ({
  className,
}) => {
  return (
    <nav className={cn(s.navigation, className)}>
      <ul className={cn(s.navigationList)}>
        {LANDING_NAV_ITEMS.map(({ link, title }) => (
          <NavigationItem
            key={link}
            link={link}
            title={title}
            className={s.navigationItem}
          />
        ))}
      </ul>
    </nav>
  )
}

