import './styles.css'

import React, { FC } from 'react'

import { buttonClassName } from './constants'

/** Стилизованная кнопка */
export const Button: FC<{
  children?: React.ReactNode
  active?: Boolean
  className?: string
  submit?: boolean
  onClick?: (e: React.MouseEvent) => void
}> = ({ children, active, className, submit, onClick }) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={buttonClassName(active, className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
