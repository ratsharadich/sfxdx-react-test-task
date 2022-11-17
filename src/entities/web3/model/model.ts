import { forward } from "effector";

import { fetchAccountFx } from "./effects";
import { requestedAccounts } from "./events";
import { $account } from "./stores";

$account.on(fetchAccountFx.doneData, (_, accounts) => accounts);

forward({
  from: requestedAccounts,
  to: fetchAccountFx,
});
