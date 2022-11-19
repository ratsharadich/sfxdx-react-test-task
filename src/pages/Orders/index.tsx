import { FC, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Background, baseSearchParams } from "src/shared";
import { Footer, Header, OrderDesk } from "src/widgets";

/** Страница совершения сделок */
export const Orders: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if ([...searchParams].length === 0) {
      setSearchParams(baseSearchParams);
    }
  }, []);

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
