import { createStore } from 'effector';

import { ACCOUNT_FROM_STORAGE } from '../constants';

/** Аккаунты пользователя */
export const $accounts = createStore<string[] | null>(ACCOUNT_FROM_STORAGE);

/** Выбранный аккаунт пользователя */
export const $selectedAccount = $accounts.map((accounts) => accounts?.[0]);

/** Произведено ли подключения кошельков */
export const $isLogin = $selectedAccount.map((accounts) => accounts ? accounts.length > 0 : false);

$selectedAccount.watch((account) => console.log('account', account));
