import { FC, useEffect, useRef, useState } from 'react'
import cn from 'classnames'

import { ISelectOption } from 'shared/types'

import { Option } from './components'
import ArrowIcon from './assets/arrow.svg'
import s from './select.module.scss'

interface SelectProps {
  selected: ISelectOption | null
  options: ISelectOption[]
  type?: 'border' | 'default'
  placeholder?: string
  onChange?: (selected: ISelectOption['value']) => void
  onClose?: () => void
  className?: string
  label?: string
}

export const Select: FC<SelectProps> = ({
  selected,
  options,
  placeholder,
  onChange,
  onClose,
  type = 'default',
  className,
  label = '',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)
  const isBorderType = type === 'border'

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.()
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose])

  useEffect(() => {
    const placeholderEl = placeholderRef.current
    if (!placeholderEl) return

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setIsOpen((prev) => !prev)
      }
    }
    placeholderEl.addEventListener('keydown', handleEnterKeyDown)

    return () => {
      placeholderEl.removeEventListener('keydown', handleEnterKeyDown)
    }
  }, [])

  const handleOptionClick = (value: ISelectOption['value']) => {
    setIsOpen(false)
    onChange?.(value)
  }

  const selectClikHandler = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div
      className={cn(s.selectWrapper, { [s.border]: isBorderType }, className)}
      ref={rootRef}
      data-is-active={isOpen}
    >
      <label className={s.label}>{label}</label>

      <div
        className={s.selectValueWrapper}
        onClick={selectClikHandler}
      >
        <div
          className={s.placeholder}
          data-selected={!!selected?.value}
          role="button"
          tabIndex={0}
          ref={placeholderRef}
        >
          {selected?.label || placeholder}
        </div>

        <div
          className={s.arrow}
          onClick={selectClikHandler}
        >
          <ArrowIcon onClick={selectClikHandler} />
        </div>
      </div>
      {isOpen && (
        <ul className={s.select}>
          {options.map((option) => (
            <Option
              key={option.value}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
