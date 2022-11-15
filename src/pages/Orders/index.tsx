import { useGate } from 'effector-react';
import { FC } from 'react'
import { Background } from 'src/shared'
import { Footer, Header, OrderDesk } from 'src/widgets'

import { OrdersGate } from './model';

/** Страница совершения сделок */
export const Orders: FC = () => {
  useGate(OrdersGate);

  return (
    <>
      <div className="grid grid-rows-content w-screen h-screen absolute z-10">
        <Header />

        <main>
          <OrderDesk />
        </main>

        <Footer />
      </div>

      <Background />
    </>
  )
}
