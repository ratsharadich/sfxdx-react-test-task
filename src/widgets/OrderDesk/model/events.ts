import { createEvent } from "effector";

/** Выставляем лимитные сделки */
export const setLimit = createEvent<boolean>();

/** Выставляем рыночные сделки */
export const setMarket = createEvent<boolean>();

/** Выставляем режим покупки */
export const setBuy = createEvent<boolean>();

/** Выставляем режим продажи */
export const setSell = createEvent<boolean>();