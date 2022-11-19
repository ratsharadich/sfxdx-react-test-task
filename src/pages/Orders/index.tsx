import { FC, useMemo } from "react";
import { Background } from "src/shared";
import { Footer, Header, OrderDesk } from "src/widgets";

/** Страница совершения сделок */
export const Orders: FC = () => {
  return useMemo(
    () => (
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
    ),
    []
  );
};
