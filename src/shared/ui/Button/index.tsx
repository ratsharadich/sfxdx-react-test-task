import './styles.css'

import React, { FC } from 'react'

import { buttonClassName } from './constants'

/** Стилизованная кнопка */
export const Button: FC<{
  children?: React.ReactNode
  active?: Boolean
  className?: string
  onClick?: (e: React.MouseEvent) => void
}> = ({ children, active, className, onClick }) => {
  return (
    <button
      className={buttonClassName(active, className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
