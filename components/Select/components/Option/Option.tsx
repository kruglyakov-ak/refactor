import { FC, MouseEventHandler, useEffect, useRef } from 'react'
import { ISelectOption } from 'shared/types'
import s from './option.module.scss'

interface OptionProps {
  option: ISelectOption
  onClick: (value: ISelectOption['value']) => void
}

export const Option: FC<OptionProps> = ({ onClick, option }) => {
  const { label, value } = option
  const optionRef = useRef<HTMLButtonElement>(null)

  const handleClick =
    (
      clickedValue: ISelectOption['value']
    ): MouseEventHandler<HTMLButtonElement> =>
    () => {
      onClick(clickedValue)
    }

  useEffect(() => {
    const option = optionRef.current
    if (!option) return
    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === 'Enter') {
        onClick(value)
      }
    }

    option.addEventListener('keydown', handleEnterKeyDown)
    return () => {
      option.removeEventListener('keydown', handleEnterKeyDown)
    }
  }, [value, onClick])

  return (
    <li className={s.option}>
      <button
        className={s.button}
        type="button"
        value={value}
        ref={optionRef}
        onClick={handleClick(value)}
      >
        {label}
      </button>
    </li>
  )
}
