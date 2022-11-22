import { createEffect } from "effector";
import { eth } from "src/shared";

import { setAccountsToStorage } from "../lib";

/** Запрашиваем аккаунты из Metamask */
export const fetchAccountsFx = createEffect<undefined, string[]>(async () => {
  const accounts =
    (await eth.requestAccounts().catch(({ message }) => alert(message))) || [];
  setAccountsToStorage(accounts);
  return accounts;
});

/** Запрашиваем тип сети, выбранной пользователем */
export const fetchTypeOfNetwork = createEffect<undefined, string>(async () => {
  const networkType =
    (await eth.net.getNetworkType().catch(({ message }) => alert(message))) ||
    "";
  return networkType;
});
