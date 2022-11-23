import { combine, sample } from "effector";
import { $accounts } from "src/entities";
import {
  $expectedOrderPrice,
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
  clickedMatchOrders,
  clickedPlaceOrder,
  getMatchedOrdersFx,
  getMatchingOrdersFx,
  OrderDetailsModalGate,
} from "src/features";

import { createOrderFX, matchOrdersFx } from "./effects";

sample({
  clock: OrderDetailsModalGate.open,
  source: {
    tokenA: $tokenA,
    tokenB: $tokenB,
    tokenAAmount: $tokenAAmount,
    priceLimit: $priceLimit,
    expectedOrderPrice: $expectedOrderPrice,
    isMarket: $isMarket,
    isSell: $isSell,
  },
  filter: ({ tokenA, tokenB, tokenAAmount, priceLimit }) =>
    Boolean(tokenA && tokenB && tokenAAmount && priceLimit),
  fn: ({ tokenA, tokenB, isSell, expectedOrderPrice, ...rest }) => {
    /** Сторона ордера задается неявно - tokenA всегда покупается, tokenB всегда продается */
    if (isSell) {
      return {
        tokenA: tokenB,
        tokenB: tokenA,
        tokenBAmount: String(expectedOrderPrice),
        ...rest,
      };
    }
    return {
      tokenA,
      tokenB,
      tokenBAmount: String(expectedOrderPrice),
      ...rest,
    };
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
  target: getMatchedOrdersFx,
});

sample({
  clock: getMatchedOrdersFx.doneData,
  filter: $isModalOpened,
  source: $matchedOrdersIds,
  fn: (ids, orders) => {
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
    tokenAAmount: $tokenAAmount,
    expectedOrderPrice: $expectedOrderPrice,
    priceLimit: $priceLimit,
    isMarket: $isMarket,
    accounts: $accounts,
    orderIds: $matchedOrdersIds,
  },
  fn: ({ accounts, expectedOrderPrice, ...source }) => ({
    ...source,
    tokenBAmount: String(expectedOrderPrice),
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
    expectedOrderPrice: $expectedOrderPrice,
    isSell: $isSell,
    accounts: $accounts,
  },
  fn: ({ accounts, isSell, tokenA, tokenB, expectedOrderPrice, ...rest }) => {
    /** Сторона ордера задается неявно - tokenA всегда покупается, tokenB всегда продается */
    if (isSell) {
      return {
        tokenA: tokenB,
        tokenB: tokenA,
        tokenBAmount: String(expectedOrderPrice),
        account: accounts[0],
        ...rest,
      };
    }
    return {
      tokenA,
      tokenB,
      tokenBAmount: String(expectedOrderPrice),
      account: accounts[0],
      ...rest,
    };
  },
  target: createOrderFX,
});
