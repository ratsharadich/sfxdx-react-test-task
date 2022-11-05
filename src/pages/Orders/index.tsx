import { FC } from "react";
import { Header, OrderDesk } from "src/widgets";
import { Background } from "src/shared";

/** Страница совершения сделок */
export const Orders: FC = () => {
  return (
    <>
      <div className="grid grid-rows-content w-screen h-screen absolute z-10">
        <Header />
        <OrderDesk />
        <div>sdf</div>
      </div>

      <Background />
    </>
  );
};
