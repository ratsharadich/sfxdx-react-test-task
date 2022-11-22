import { forward } from "effector";

import { fetchAccountsFx, fetchTypeOfNetwork } from "./effects";
import { requestedAccounts } from "./events";
import { $accounts, $networkType } from "./stores";

$accounts.on(fetchAccountsFx.doneData, (_, accounts) => accounts);

$networkType.on(fetchTypeOfNetwork.doneData, (_, type) => type);

forward({
  from: requestedAccounts,
  to: fetchAccountsFx,
});
