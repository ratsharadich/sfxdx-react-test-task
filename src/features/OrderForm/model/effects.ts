import { createEffect } from "effector";
import {
  contractMethods,
  getMatchingOrders,
  GetMatchingOrdersFnArgs,
} from "src/shared";

import { MatchOrdersFnArgs } from "../interfaces";

/** Запрашиваем массив id заявок для передачи в matchOrders смарт-контракта */
export const getMatchingOrdersFx = createEffect<
  GetMatchingOrdersFnArgs,
  string[]
>(async (args) => {
  const result = await getMatchingOrders(args);
  return result;
});

/** Создаём ордер */
export const createOrderFX = createEffect<
  {
    tokenA: string;
    tokenB: string;
    tokenAmount: number;
    priceLimit: number;
  },
  void
>(async ({ tokenA, tokenB, tokenAmount, priceLimit }) => {
  await contractMethods.createOrder(tokenA, tokenB, tokenAmount, priceLimit);
});

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
      .send({ from: account }).then((result: any) => console.log('result', result));

    return result;
  }
);

matchOrdersFx.doneData.watch((data) => console.log("data", data));
