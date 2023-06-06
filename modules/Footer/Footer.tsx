import { FC } from 'react'

import s from './footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer>
      <div className={s.copyright}>
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
