import { combine, createStore } from "effector";

import { OrderDetailsModalGate } from "./gates";

/** Противоположные ордеры с бэка */
export const $matchedOrdersIds = createStore<string[]>([]);

/** Загружаются ли совпадения оредров */
export const $isMatchingOrdersLoading = createStore<boolean>(false);

/** Загружаются ли ордеры с бэкенда getOrders */
export const $isOrdersLoading = createStore<boolean>(false);

/** Происходит ли какой-нибудь запрос для модального окна */
export const $isModalQueriesLoading = combine(
  [$isMatchingOrdersLoading, $isOrdersLoading],
  ([isMatchingOrdersLoading, isOrdersLoading]) =>
    isMatchingOrdersLoading || isOrdersLoading
);

/** Совпавшие противоположные заявки */
export const $matchedOrders = createStore<Array<Record<string, string>>>(
  []
).reset(OrderDetailsModalGate.close);

/** Максимальное значение amountA по массиву смтэтченных оредеров */
export const $maxAmountA = $matchedOrders.map((orders) =>
  Math.max(...orders.map(({ amountA }) => Number(amountA)))
);
