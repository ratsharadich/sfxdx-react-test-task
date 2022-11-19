import { setBuy, setLimit, setMarket, setSell } from "./events";
import { $isBuy, $isLimit, $isMarket, $isSell } from "./stores";

$isLimit.on(setLimit, (_, status) => status);
$isMarket.on(setMarket, (_, status) => status);

$isBuy.on(setBuy, (_, status) => status);
$isSell.on(setSell, (_, status) => status);