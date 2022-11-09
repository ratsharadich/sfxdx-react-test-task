import './styles.css'

import { FC } from 'react'
import { OrderForm } from 'src/features'
import { BlockTitle } from 'src/shared'

import { PLACE_THE_ORDER } from '../../constants'
import { GridTile } from '../GridTile'
import { OrderTypeSelector } from '../OrderTypeSelector'
import { TransactionTypeSelector } from '../TransactionTypeSelector'

/** Раздел размещения заявки */
export const PlaceTheOrder: FC = () => {
  return (
    <GridTile
      className="gap-y-[2.5rem] relative svg-pattern"
      dataTestId="PlaceTheOrder"
    >
      <div className="flex flex-wrap items-center gap-1.5">
        <BlockTitle text={PLACE_THE_ORDER} />
        <OrderTypeSelector />
      </div>

      <TransactionTypeSelector />

      <OrderForm />
    </GridTile>
  )
}
