import { combine, sample } from "effector";
import { $accounts } from "src/entities";
import {
  $isBuy,
  $isMarket,
  $isModalOpened,
  $isSell,
  $matchedOrders,
  $matchedOrdersIds,
  $priceLimit,
  $tokenA,
  $tokenAmount,
  $tokenB,
  clickedMatchOrders,
  clickedPlaceOrder,
  getMatchingOrdersFx,
  getOrdersFx,
  OrderDetailsModalGate,
} from "src/features";

import { createOrderFX, matchOrdersFx } from "./effects";

sample({
  clock: OrderDetailsModalGate.open,
  source: {
    tokenA: $tokenA,
    tokenB: $tokenB,
    tokenAmount: $tokenAmount,
    priceLimit: $priceLimit,
    isMarket: $isMarket,
    isSell: $isSell,
  },
  filter: ({ tokenA, tokenB, tokenAmount, priceLimit }) =>
    Boolean(tokenA && tokenB && tokenAmount && priceLimit),
  fn: ({ tokenA, tokenB, isSell, ...rest }) => {
    /** Сторона ордера задается неявно - tokenA всегда покупается, tokenB всегда продается */
    if (isSell) return { tokenA: tokenB, tokenB: tokenA, ...rest };
    return { tokenA, tokenB, ...rest };
  },
  target: getMatchingOrdersFx,
});

sample({
  clock: getMatchingOrdersFx.done,
  source: {
    tokenA: $tokenA,
    tokenB: $tokenB,
    isBuy: $isBuy,
    filter: combine(
      [$isModalOpened, $matchedOrdersIds],
      ([isModalOpened, matchedOrdersIds]) =>
        Boolean(isModalOpened && matchedOrdersIds.length)
    ),
  },
  filter: ({ filter }) => filter,
  fn: ({ tokenA, tokenB, isBuy }) => {
    /** Сторона ордера задается неявно - tokenA всегда покупается, tokenB всегда продается */
    if (isBuy) {
      return { tokenA: tokenB, tokenB: tokenA, userId: "", active: true };
    }
    return { tokenA, tokenB, userId: "", active: true };
  },
  target: getOrdersFx,
});

sample({
  clock: getOrdersFx.doneData,
  filter: $isModalOpened,
  source: $matchedOrdersIds,
  fn: (ids, orders) => {
    console.log(
      "orders.filter((order) => ids.includes(order.id)",
      orders.filter((order) => ids.includes(order.id))
    );
    console.log("orders", orders);
    console.log("ids", ids);
    return orders
      .filter((order) => ids.includes(order.id))
      .sort((a, b) => (Number(a.amountA) < Number(b.amountA) ? 1 : -1));
  },
  target: $matchedOrders,
});

sample({
  clock: clickedMatchOrders,
  source: {
    tokenA: $tokenA,
    tokenB: $tokenB,
    tokenAmount: $tokenAmount,
    priceLimit: $priceLimit,
    isMarket: $isMarket,
    accounts: $accounts,
    orderIds: $matchedOrdersIds,
  },
  fn: ({ accounts, ...source }) => ({
    ...source,
    account: accounts[0],
  }),
  target: matchOrdersFx,
});

sample({
  clock: clickedPlaceOrder,
  source: {
    tokenA: $tokenA,
    tokenB: $tokenB,
    tokenAmount: $tokenAmount,
    priceLimit: $priceLimit,
    accounts: $accounts,
  },
  fn: ({ accounts, ...rest }) => ({ ...rest, account: accounts[0] }),
  target: createOrderFX,
});
