import axios from "axios";

import { BACK_URL } from "./constants";
import { GetMatchingOrdersFn, GetOrdersFn } from "./interfaces";

export const api = axios.create({ baseURL: BACK_URL });

/** Запрашиваем orders */
export const getOrders: GetOrdersFn = async ({
  tokenA,
  tokenB,
  userId,
  active,
}) => {
  const result = (
    await api.get(
      `/getOrders?tokenA=${tokenA}&tokenB=${tokenB}&user=${userId}&active=${String(
        active
      )}`
    )
  ).data;

  return result as Array<Record<string, string>>;
};

/** Запрашиваем массив id заявок для передачи в matchOrders смарт-контракта
 * Сторона ордера задается неявно - tokenA всегда покупается, tokenB всегда продается
 * Маркетный ордер задается неявно, если amountB равен нулю
 */
export const getMatchingOrders: GetMatchingOrdersFn = async ({
  tokenA,
  tokenB,
  tokenAAmount,
  tokenBAmount,
  isMarket,
}) => {
  const result = (
    await api.get(
      `/getMatchingOrders?tokenA=${tokenA}&tokenB=${tokenB}&amountA=${tokenAAmount}&amountB=${tokenBAmount}&isMarket=${String(
        isMarket
      )}`
    )
  ).data;

  return result as string[];
};
