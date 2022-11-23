import { FC } from "react";

import { PRICE_USDT, SIZE_ETH } from "../../constants";
import { MatchedOrdersBlockProps } from "../../interfaces";
import { MatchedOrder } from "../MathcedOrder";

/** Блок со списком сметченных ордеров */
export const MatchedOrdersBlock: FC<MatchedOrdersBlockProps> = ({ orders }) => (
  <div className="flex flex-col gap-0.5 w-full">
    <div className="flex justify-between font-inter font-normal text-sm px-1.25 pb-1">
      <span>{SIZE_ETH}</span>
      <span>{PRICE_USDT}</span>
    </div>

    {orders.map(({ id, amountA, amountB }) => (
      <MatchedOrder key={id} amountA={amountA} amountB={amountB} />
    ))}
  </div>
);
