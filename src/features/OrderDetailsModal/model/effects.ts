import { createEffect } from "effector";
import {
  contractMethods,
  getMatchingOrders,
  GetMatchingOrdersFnArgs,
  getOrders,
  GetOrdersFnArgs,
} from "src/shared";

/** Запрашиваем заявки */
export const getOrdersFx = createEffect<
  GetOrdersFnArgs,
  Array<Record<string, string>>
>(async (args) => {
  const result = await getOrders(args);
  return result;
});

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
