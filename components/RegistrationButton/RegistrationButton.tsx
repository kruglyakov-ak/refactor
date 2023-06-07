import { CustomLink } from 'components/CustomLink/CustomLink'
import { FC, MouseEvent } from 'react'

export const RegistrationButton: FC = () => {
  const clickHandler = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault()
  }
  
  return (
    <CustomLink
      href={'/strategies'}
      onClick={clickHandler}
    >
      Registration
    </CustomLink>
  )
}
