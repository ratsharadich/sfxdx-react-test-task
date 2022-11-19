import { sample } from "effector";

import { getMatchingOrdersFx } from "./effects";
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
  fn: ({ tokenA, tokenB, tokenAmount, priceLimit, isMarket }) => ({
    tokenA,
    tokenB,
    tokenAmount,
    priceLimit,
    isMarket,
  }),
  target: getMatchingOrdersFx,
});
