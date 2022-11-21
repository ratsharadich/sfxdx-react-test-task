import { createStore } from "effector";

/** Противоположные ордеры с бэка */
export const $matchedOrdersIds = createStore<string[]>([]);

/** Загружаются ли совпадения оредров */
export const $isMatchingOrdersLoading = createStore<boolean>(false);

/** Совпавшие противоположные заявки */
export const $matchedOrders = createStore<Array<Record<string, string>>>([]);

$matchedOrdersIds.watch((ids) => console.log('ids', ids));

$matchedOrders.watch((matchedOrders) =>
  console.log(matchedOrders, "matchedOrders")
);
