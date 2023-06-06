import { FC } from 'react'

import s from './mainHeader.module.scss'

export const Header: FC = () => {
  return (
    <div>
      <header className={s.header}></header>
    </div>
  )
}
