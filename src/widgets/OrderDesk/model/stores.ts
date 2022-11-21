import { combine } from "effector";
import { $isBuy, $isLimit, $isMarket, $isSell } from "src/features";

import { BUY, LIMIT, MARKET, SELL } from "../constants";

export const $orderType = combine(
  [$isLimit, $isMarket],
  ([isLimit, isMarket]) => {
    if (isLimit) return LIMIT;
    if (isMarket) return MARKET;
    return '';
  }
);

export const $orderSide = combine([$isBuy, $isSell], ([isBuy, isSell]) => {
  if (isBuy) return BUY;
  if (isSell) return SELL;
  return '';
});
