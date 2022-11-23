import cn from 'classnames'

export const gridTileClassName = (className?: string) =>
  cn('flex flex-col bg-white rounded-2xl py-2.25 px-2 ', className)

export const orderDeskGridClassName = [
  'grid',
  'justify-center',
  'md:grid-cols-3fr.1fr',
  'gap-1.25',
  'w-full',
  'h-full',
  'px-4.5',
  'pt-2.75',
  'pb-5',
  'max-md:grid-cols-[21rem]'
].join(' ')

export const PLACE_THE_ORDER = 'Place the Order'
export const ORDER_BOOK = 'Order Book'
export const MY_ORDERS = 'My Orders'

export const MY_ORDERS_DUMMY = 'Connect your wallet to start trading'
