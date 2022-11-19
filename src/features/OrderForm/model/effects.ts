import { createEffect } from "effector";
import {
  contractMethods,
  getMatchingOrders,
  getMatchingOrdersFnArgs,
} from "src/shared";

/** Запрашиваем массив id заявок для передачи в matchOrders смарт-контракта */
export const getMatchingOrdersFx = createEffect<
  getMatchingOrdersFnArgs,
  string[]
>(async (args) => await getMatchingOrders(args));

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
