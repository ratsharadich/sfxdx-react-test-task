import React, { FC } from 'react'

import { gridTileClassName } from '../constants'
import { GridTileProps } from '../interfaces'

/** Обёртка плитки grid'a */
export const GridTile: FC<GridTileProps> = ({ children, className, dataTestId }) => {
  return (
    <article className={gridTileClassName(className)} data-testid={dataTestId}>
      {children}
    </article>
  )
}
