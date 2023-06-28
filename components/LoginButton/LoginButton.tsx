import { FC, MouseEvent } from 'react'

import { Button } from 'components'

interface ILoginButtonProps {
  className?: string
}

export const LoginButton: FC<ILoginButtonProps> = ({ className }) => {
  const clickHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault()
  }

  return (
    <Button
      className={className}
      onClick={clickHandler}
      href="login"
    >
      Log in
    </Button>
  )
}
