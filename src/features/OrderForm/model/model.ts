import { sample } from "effector";
import { $accounts } from "src/entities";

import { getMatchingOrdersFx, matchOrdersFx } from "./effects";
import {
  clickedSubmitButton,
  setBuy,
  setLimit,
  setMarket,
  setPriceLimit,
  setSell,
  setTokenA,
  setTokenAmount,
  setTokenB,
} from "./events";
import {
  $isBuy,
  $isLimit,
  $isMarket,
  $isSell,
  $oppositeOrders,
  $priceLimit,
  $tokenA,
  $tokenAmount,
  $tokenB,
} from "./stores";

$isLimit.on(setLimit, (_, status) => status);
$isMarket.on(setMarket, (_, status) => status);

$isBuy.on(setBuy, (_, status) => status);
$isSell.on(setSell, (_, status) => status);

$tokenA.on(setTokenA, (_, token) => token);
$tokenB.on(setTokenB, (_, token) => token);

$tokenAmount.on(setTokenAmount, (_, amount) => amount);
$priceLimit.on(setPriceLimit, (_, limit) => limit);

$oppositeOrders.on(matchOrdersFx.doneData, (_, orders) => orders);

clickedSubmitButton.watch(() => console.log("clicked"));

sample({
  clock: clickedSubmitButton,
  source: {
    tokenA: $tokenA,
    tokenB: $tokenB,
    tokenAmount: $tokenAmount,
    priceLimit: $priceLimit,
    isMarket: $isMarket,
  },
  filter: ({ tokenA, tokenB, tokenAmount, priceLimit }) =>
    Boolean(tokenA && tokenB && tokenAmount && priceLimit),
  target: getMatchingOrdersFx,
});

sample({
  clock: getMatchingOrdersFx.doneData,
  source: {
    tokenA: $tokenA,
    tokenB: $tokenB,
    tokenAmount: $tokenAmount,
    priceLimit: $priceLimit,
    isMarket: $isMarket,
    accounts: $accounts,
  },
  fn: ({ accounts, ...source }, from) => ({
    ...source,
    orderIds: from,
    account: accounts[0],
  }),
  target: matchOrdersFx,
});
