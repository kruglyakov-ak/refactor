import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import LogoImage from 'shared/assets/images/logo.png'

import s from './mainLogo.module.scss'

interface IMainLogoProps {
  className?: string
}

export const MainLogo: FC<IMainLogoProps> = ({ className }) => {
  return (
    <Link
      className={cn(s.link, className)}
      href={'/'}
    >
      <Image
        alt="Mera Quant"
        src={LogoImage}
        fill
      />
    </Link>
  )
}
