import { FC } from 'react'

import { RESERVED_RIGHTS } from './constants'

/** Все права защищены */
export const ReservedRights: FC<{ className: string }> = ({ className }) => {
  return <span className={className}>{RESERVED_RIGHTS}</span>
}
