import axios from "axios";

import { BACK_URL } from "./constants";
import { getMatchingOrdersFn } from "./interfaces";

export const api = axios.create({ baseURL: BACK_URL });

/** Запрашиваем orders */
// export const getOrders = api.get("/getOrders");

/** Запрашиваем массив id заявок для передачи в matchOrders смарт-контракта
 * Сторона ордера задается неявно - tokenA всегда покупается, tokenB всегда продается
 * Маркетный ордер задается неявно, если amountB равен нулю
 */
export const getMatchingOrders: getMatchingOrdersFn = async ({
  tokenA,
  tokenB,
  tokenAmount,
  priceLimit,
  isMarket,
}) =>
  await api.get(
    `/getMatchingOrders?tokenA=${tokenA}&tokenB=${tokenB}&amountA=${tokenAmount}&amountB=${priceLimit}&isMarket=${String(
      isMarket
    )}`
  );
