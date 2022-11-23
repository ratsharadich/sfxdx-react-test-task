import { getMatchedOrdersFx, getMatchingOrdersFx } from "./effects";
import {
  $isMatchingOrdersLoading,
  $isOrdersLoading,
  $matchedOrdersIds,
} from "./stores";

$isMatchingOrdersLoading.on(
  getMatchingOrdersFx.pending,
  (_, loading) => loading
);

$isOrdersLoading.on(getMatchedOrdersFx.pending, (_, loading) => loading);

$matchedOrdersIds.on(getMatchingOrdersFx.doneData, (_, orders) => orders);
