import { createEvent } from 'effector';

/** Запрашиваем аккаунты пользователя  */
export const requestedAccounts = createEvent();

/** Совершаем перевод */
export const sentTransaction = createEvent<{ from: string, to: string }>();
