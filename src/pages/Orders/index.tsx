import { FC } from 'react'
import { Background } from 'src/shared'
import { Footer, Header, OrderDesk } from 'src/widgets'

/** Страница совершения сделок */
export const Orders: FC = () => {
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
