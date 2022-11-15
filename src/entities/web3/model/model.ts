import { forward } from 'effector';

import { fetchAccountsFx } from './effects';
import { requestedAccounts } from './events';
import { $accounts } from './stores'; ;

$accounts.on(fetchAccountsFx.doneData, (_, accounts) => accounts);

forward({
  from: requestedAccounts,
  to: fetchAccountsFx
});
