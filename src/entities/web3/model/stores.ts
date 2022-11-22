import { createStore } from "effector";

import { ACCOUNTS_FROM_STORAGE, TARGET_NETWORK_TYPE } from "../constants";

/** Аккаунт пользователя */
export const $accounts = createStore<string[]>(ACCOUNTS_FROM_STORAGE);

/** Произведено ли подключения кошельков */
export const $isLogin = $accounts.map((account) => !!account.length);

/** Тип сети, выбранной пользователем */
export const $networkType = createStore<string>("");

/** Корректная ли сеть выбрана */
export const $isNetworkCorrect = $networkType.map(
  (type) => type === TARGET_NETWORK_TYPE
);

$isLogin.watch((login) => console.log("login", login));
