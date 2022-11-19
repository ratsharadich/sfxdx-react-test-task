import { createEffect } from "effector";
import { eth } from "src/shared";

import { setAccountsToStorage } from "../lib";

/** Запрашиваем аккаунты из Metamask */
export const fetchAccountsFx = createEffect<undefined, string[]>(async () => {
  const accounts = await eth.requestAccounts();
  setAccountsToStorage(accounts);
  return accounts;
});
