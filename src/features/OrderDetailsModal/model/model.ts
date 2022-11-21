import { getMatchingOrdersFx } from "./effects";
import { $isMatchingOrdersLoading, $matchedOrdersIds } from "./stores";

$isMatchingOrdersLoading.on(
    getMatchingOrdersFx.pending,
    (_, loading) => loading
  );

$matchedOrdersIds.on(getMatchingOrdersFx.doneData, (_, orders) => orders);