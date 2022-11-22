import { getMatchingOrdersFx, getOrdersFx } from "./effects";
import {
  $isMatchingOrdersLoading,
  $isOrdersLoading,
  $matchedOrdersIds,
} from "./stores";

$isMatchingOrdersLoading.on(
  getMatchingOrdersFx.pending,
  (_, loading) => loading
);

$isOrdersLoading.on(getOrdersFx.pending, (_, loading) => loading);

$matchedOrdersIds.on(getMatchingOrdersFx.doneData, (_, orders) => orders);
