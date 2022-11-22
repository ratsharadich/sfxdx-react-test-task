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
  $tokenAAmount,
  $tokenB,
  $tokenBAmount,
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
    tokenAAmount: $tokenAAmount,
    tokenBAmount: $tokenBAmount,
    priceLimit: $priceLimit,
    isMarket: $isMarket,
    isSell: $isSell,
  },
  filter: ({ tokenA, tokenB, tokenAAmount, priceLimit }) =>
    Boolean(tokenA && tokenB && tokenAAmount && priceLimit),
  fn: ({ tokenA, tokenB, isSell, priceLimit, ...rest }) => {
    /** Сторона ордера задается неявно - tokenA всегда покупается, tokenB всегда продается */
    if (isSell) {
      return { tokenA: tokenB, tokenB: tokenA, ...rest };
    }
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
  fn: (ids, orders) =>
    orders
      .filter((order) => ids.includes(order.id))
      .sort((a, b) => (Number(a.amountA) < Number(b.amountA) ? 1 : -1)),
  target: $matchedOrders,
});

sample({
  clock: clickedMatchOrders,
  source: {
    tokenA: $tokenA,
    tokenB: $tokenB,
    tokenAAmount: $tokenAAmount,
    tokenBAmount: $tokenBAmount,
    isMarket: $isMarket,
    accounts: $accounts,
    orderIds: $matchedOrdersIds,
  },
  fn: ({ accounts, ...rest }) => ({
    ...rest,
    account: accounts[0],
  }),
  target: matchOrdersFx,
});

sample({
  clock: clickedPlaceOrder,
  source: {
    tokenA: $tokenA,
    tokenB: $tokenB,
    tokenAAmount: $tokenAAmount,
    tokenBAmount: $tokenBAmount,
    isSell: $isSell,
    accounts: $accounts,
  },
  fn: ({ accounts, tokenA, tokenB, isSell, ...rest }) => {
    /** Сторона ордера задается неявно - tokenA всегда покупается, tokenB всегда продается */
    if (isSell) {
      return {
        tokenA: tokenB,
        tokenB: tokenA,
        account: accounts[0],
        ...rest,
      };
    }
    return { tokenA, tokenB, account: accounts[0], ...rest };
  },
  target: createOrderFX,
});
