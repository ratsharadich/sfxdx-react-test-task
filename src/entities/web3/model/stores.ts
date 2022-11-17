import { createStore } from "effector";

import { ACCOUNT_FROM_STORAGE } from "../constants";
import { fetchAccountFx } from "./effects";

/** Аккаунт пользователя */
export const $account = createStore<string | null>(ACCOUNT_FROM_STORAGE);

/** Выбранный аккаунт пользователя */
export const $selectedAccount = $account.map((accounts) => accounts?.[0]);

/** Произведено ли подключения кошельков */
export const $isLogin = $selectedAccount.map((accounts) =>
  accounts ? accounts.length > 0 : false
);

/** Происходит ли исполнение какого-либо запроса на странице */
export const $isLoading = fetchAccountFx.pending;

$selectedAccount.watch((account) => console.log("account", account));
