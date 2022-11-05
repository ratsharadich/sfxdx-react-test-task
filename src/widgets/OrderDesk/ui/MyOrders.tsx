import { FC } from "react";
import { BlockTitle } from "src/shared";
import { GridTile } from "./GridTile";
import { MY_ORDERS } from "../constants";

/** Размел просмотра "моих" заявок */
export const MyOrders: FC = () => {
  /** TODO: Прикрутить данные  */
  const contentMock = false;

  return (
    <GridTile dataTestId="MyOrders" className="min-h-[20.5rem]">
      <BlockTitle text={MY_ORDERS} />

      <div className="flex w-full h-full items-center justify-center">
        {contentMock ? (
          <></>
        ) : (
          <span className="font-manrope font-bold text-gray text-2xl">
            Connect your wallet to start trading
          </span>
        )}
      </div>
    </GridTile>
  );
};
