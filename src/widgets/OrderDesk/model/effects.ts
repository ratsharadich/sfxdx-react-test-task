import { createEffect } from "effector";
import { contractMethods } from "src/shared";

import { MatchOrdersFnArgs } from "../interfaces";

/** Сопоставляем список переданных ордеров */
export const matchOrdersFx = createEffect<MatchOrdersFnArgs, string[]>(
  async ({
    orderIds,
    tokenA,
    tokenB,
    tokenAAmount,
    tokenBAmount,
    isMarket,
    account,
  }) => {
    console.log("Тут");

    const result = await contractMethods
      .matchOrders(
        orderIds,
        tokenA,
        tokenB,
        tokenAAmount,
        tokenBAmount,
        isMarket
      )
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
    tokenAAmount: string;
    tokenBAmount: string;
    account: string;
  },
  void
>(async ({ tokenA, tokenB, tokenAAmount, tokenBAmount, account }) => {
  await contractMethods
    .createOrder(tokenA, tokenB, tokenAAmount, tokenBAmount)
    .send({ from: account })
    .catch(({ message }: { message: string }) => alert(message));
});

matchOrdersFx.doneData.watch((data) => console.log("data", data));
createOrderFX.doneData.watch((data) => console.log("createOrderFX", data));
