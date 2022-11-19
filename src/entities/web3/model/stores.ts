import { createStore } from "effector";

import { ACCOUNTS_FROM_STORAGE } from "../constants";
import { fetchAccountsFx } from "./effects";

/** Аккаунт пользователя */
export const $accounts = createStore<string[]>(ACCOUNTS_FROM_STORAGE);

/** Выбранный аккаунт пользователя */
export const $selectedAccount = $accounts.map((accounts) => accounts?.[0]);

/** Произведено ли подключения кошельков */
export const $isLogin = $selectedAccount.map((accounts) =>
  accounts ? accounts.length > 0 : false
);

/** Происходит ли исполнение какого-либо запроса на странице */
export const $isLoading = fetchAccountsFx.pending;

$selectedAccount.watch((account) => console.log("account", account));
