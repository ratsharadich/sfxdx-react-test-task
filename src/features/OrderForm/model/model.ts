import {
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
  $isModalOpened,
  $isSell,
  $priceLimit,
  $tokenA,
  $tokenAAmount,
  $tokenB,
} from "./stores";

$isLimit.on(setLimit, (_, status) => status);
$isMarket.on(setMarket, (_, status) => status);

$isBuy.on(setBuy, (_, status) => status);
$isSell.on(setSell, (_, status) => status);

$tokenA.on(setTokenA, (_, token) => token);
$tokenB.on(setTokenB, (_, token) => token);

$tokenAAmount.on(setTokenAmount, (_, amount) => amount);
$priceLimit.on(setPriceLimit, (_, limit) => limit);

$isModalOpened.on(setModalStatus, (_, status) => status);
