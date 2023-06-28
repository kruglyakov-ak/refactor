import { FC, MouseEvent } from 'react'

import { CustomLink } from 'components'

interface IRegistrationButtonProps {
  className?: string
}

export const RegistrationButton: FC<IRegistrationButtonProps> = ({
  className,
}) => {
  const clickHandler = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault()
  }

  return (
    <CustomLink
      href={''}
      onClick={clickHandler}
    >
      Registration
    </CustomLink>
  )
}
