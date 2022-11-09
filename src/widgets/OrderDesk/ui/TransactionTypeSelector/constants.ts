import cn from 'classnames'

import { BUY, SELL } from '../../constants'
import { ButtonType } from './interfaces'

export const commonButtonClassName =
  'w-[9.25rem] h-[2.25rem] !bg-[#08D899] text-white'
export const notSelectedButtonClassName =
  '!bg-transparent font-inter text-gray font-bold'

export const buyButtonClassName = (type: ButtonType) =>
  cn(commonButtonClassName, { [notSelectedButtonClassName]: type !== BUY })

export const sellButtonClassName = (type: ButtonType) =>
  cn(commonButtonClassName, { [notSelectedButtonClassName]: type !== SELL })
