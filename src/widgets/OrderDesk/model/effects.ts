import { createEffect } from "effector";
import { contractMethods } from "src/shared";

import { MatchOrdersFnArgs } from "../interfaces";

/** Сопоставляем список переданных ордеров */
export const matchOrdersFx = createEffect<MatchOrdersFnArgs, string[]>(
  async ({
    orderIds,
    tokenA,
    tokenB,
    tokenAmount,
    priceLimit,
    isMarket,
    account,
  }) => {
    console.log("Тут");

    const result = await contractMethods
      .matchOrders(orderIds, tokenA, tokenB, tokenAmount, priceLimit, isMarket)
      .send({ from: account })
      .then((result: any) => console.log("result", result));

    return result;
  }
);

matchOrdersFx.doneData.watch((data) => console.log("data", data));
