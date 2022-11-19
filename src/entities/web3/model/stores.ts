import { createStore } from "effector";

import { ACCOUNTS_FROM_STORAGE } from "../constants";
import { fetchAccountsFx } from "./effects";

/** Аккаунт пользователя */
export const $account = createStore<string[]>(ACCOUNTS_FROM_STORAGE);

/** Произведено ли подключения кошельков */
export const $isLogin = $account.map((account) => !!account.length);

/** Происходит ли исполнение какого-либо запроса на странице */
export const $isLoading = fetchAccountsFx.pending;

$isLogin.watch((login) => console.log("login", login));
