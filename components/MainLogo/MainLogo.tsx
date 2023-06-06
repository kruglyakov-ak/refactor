import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import { APP_ROUTER_PATHS } from 'shared/constants'
import Logo from 'shared/assets/images/logo.png'

import s from './mainLogo.module.scss'

interface MainLogoProps {
  className?: string
}

export const MainLogo: FC<MainLogoProps> = ({ className }) => {
  return (
    <Link
      className={cn(s.logoLink, className)}
      href={APP_ROUTER_PATHS.MAIN}
    >
      <Image
        alt="logo"
        src={Logo}
        fill
        sizes={`(max-width: 1919px) 90px 60px, (max-width: 319px) 65px 40px`}
      />
    </Link>
  )
}

