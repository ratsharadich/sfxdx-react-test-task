import { createEffect } from "effector";
import { contractMethods, getOrders, GetOrdersFnArgs } from "src/shared";

import { CreateOrderFnArgs, MatchOrdersFnArgs } from "../interfaces";

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
      .catch(({ message }: { message: string }) => alert(message));

    return result;
  }
);

/** Создаём ордер */
export const createOrderFX = createEffect<CreateOrderFnArgs, void>(
  async ({ tokenA, tokenB, tokenAAmount, tokenBAmount, account }) => {
    await contractMethods
      .createOrder(tokenA, tokenB, tokenAAmount, tokenBAmount)
      .send({ from: account })
      .catch(({ message }: { message: string }) => alert(message));
  }
);

/** Запрашиваем заявки текущего пользователя */
export const getUserOrdersFx = createEffect<
  GetOrdersFnArgs,
  Array<Record<string, string>>
>(async (args) => {
  const result = await getOrders(args);
  return result;
});
