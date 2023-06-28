'use client'

import { FC, useState } from 'react'

import { Select } from 'components'

import { ISelectOption } from 'shared/types'

const options = [{ value: 'en', label: 'EN' }]

interface LocalSelect {
  className?: string
}

export const LocalSelect: FC<LocalSelect> = ({ className }) => {
  const [selectedOption, setSelectionOption] = useState<null | ISelectOption>(
    options[0]
  )

  const localSelectChangeHandler = (value: string) => {
    setSelectionOption(options.find((option) => option.value === value) || null)
  }

  return (
    <Select
      options={options}
      selected={selectedOption}
      onChange={localSelectChangeHandler}
      className={className}
    />
  )
}
