import { FC } from "react";

import { PRICE_USDT, SIZE_ETH } from "../../constants";
import { MatchedOrder } from "../MathcedOrder";

export const MatchedOrdersBlock: FC<{
  orders: Array<Record<string, string>>;
}> = ({ orders }) => (
  <div className="flex flex-col gap-[0.5rem] w-full">
    <div className="flex justify-between font-inter font-normal text-sm px-[1.25rem] pb-[1rem]">
      <span>{SIZE_ETH}</span>
      <span>{PRICE_USDT}</span>
    </div>

    {orders.map(({ id, amountA, amountB }) => (
      <MatchedOrder key={id} amountA={amountA} amountB={amountB} />
    ))}
  </div>
);
