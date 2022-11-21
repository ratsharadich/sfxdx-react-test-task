import { sample } from "effector";
import { $accounts } from "src/entities";

import { getMatchingOrdersFx, matchOrdersFx } from "./effects";
import {
  clickedMatchOrders,
  clickedSubmitButton,
  setBuy,
  setLimit,
  setMarket,
  setModalStatus,
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
  $isMatchingOrdersLoading,
  $isModalOpened,
  $isSell,
  $matchedOrders,
  // $oppositeOrders,
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

$isModalOpened.on(setModalStatus, (_, status) => status);

$isMatchingOrdersLoading.on(
  getMatchingOrdersFx.pending,
  (_, loading) => loading
);
$matchedOrders.on(getMatchingOrdersFx.doneData, (_, orders) => orders);

clickedSubmitButton.watch(() => console.log("clicked"));

sample({
  clock: clickedSubmitButton,
  source: $isModalOpened,
  fn: (status) => !status,
  target: setModalStatus,
});

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
  clock: clickedMatchOrders,
  source: {
    tokenA: $tokenA,
    tokenB: $tokenB,
    tokenAmount: $tokenAmount,
    priceLimit: $priceLimit,
    isMarket: $isMarket,
    accounts: $accounts,
    orderIds: $matchedOrders,
  },
  fn: ({ accounts, ...source }) => ({
    ...source,
    account: accounts[0],
  }),
  target: matchOrdersFx,
});
