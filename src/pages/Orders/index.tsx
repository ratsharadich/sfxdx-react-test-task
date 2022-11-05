import { FC } from "react";
import { OrderDesk } from "src/widgets";
import { Background } from "src/shared";

/** Страница совершения сделок */
export const Orders: FC = () => {
  return (
    <>
      <div className="absolute z-10">
        <OrderDesk />
      </div>

      <Background />
    </>
  );
};
