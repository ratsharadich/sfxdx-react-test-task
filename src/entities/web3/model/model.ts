import { forward } from "effector";

import { fetchAccountsFx } from "./effects";
import { requestedAccounts } from "./events";
import { $account } from "./stores";

$account.on(fetchAccountsFx.doneData, (_, accounts) => accounts);

forward({
  from: requestedAccounts,
  to: fetchAccountsFx,
});
