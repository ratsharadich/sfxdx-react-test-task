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
      .catch(({ message }: { message: string }) => alert(message))
      .then((result: any) => console.log("result", result));

    return result;
  }
);

/** Создаём ордер */
export const createOrderFX = createEffect<
  {
    tokenA: string;
    tokenB: string;
    tokenAmount: string;
    priceLimit: string;
    account: string;
  },
  void
>(async ({ tokenA, tokenB, tokenAmount, priceLimit, account }) => {
  await contractMethods
    .createOrder(tokenA, tokenB, tokenAmount, priceLimit)
    .send({ from: account })
    .catch(({ message }: { message: string }) => alert(message));
});

matchOrdersFx.doneData.watch((data) => console.log("data", data));
createOrderFX.doneData.watch((data) => console.log("createOrderFX", data));
