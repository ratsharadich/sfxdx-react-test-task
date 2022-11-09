import { FC } from "react";
import { BlockTitle } from "src/shared";
import { GridTile } from "./GridTile";
import { MY_ORDERS, MY_ORDERS_DUMMY } from "../constants";

/** Размел просмотра "моих" заявок */
export const MyOrders: FC = () => {
  /** TODO: Прикрутить данные  */
  const contentMock = false;

  return (
    <GridTile
      className="min-h-[20.5rem] md:order-3 max-md:order-2"
      dataTestId="MyOrders"
    >
      <BlockTitle text={MY_ORDERS} />

      <div className="flex w-full h-full items-center justify-center">
        {contentMock ? (
          <></>
        ) : (
          <span className="font-manrope font-bold text-gray text-2xl">
            {MY_ORDERS_DUMMY}
          </span>
        )}
      </div>
    </GridTile>
  );
};
