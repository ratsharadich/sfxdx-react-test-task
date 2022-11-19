import { createEvent } from "effector";

/** Выставляем лимитные сделки */
export const setLimit = createEvent<boolean>();

/** Выставляем рыночные сделки */
export const setMarket = createEvent<boolean>();

/** Выставляем режим покупки */
export const setBuy = createEvent<boolean>();

/** Выставляем режим продажи */
export const setSell = createEvent<boolean>();

/** Вписываем токен А */
export const setTokenA = createEvent<string>();

/** Вписываем количество токенов для операции */
export const setTokenAmount = createEvent<string>();

/** Вписываем токен В */
export const setTokenB = createEvent<string>();

/** Вписываем лимит на цену за токен */
export const setPriceLimit = createEvent<string>();

/** Нажимаем кнопку подтверждения формы */
export const clickedSubmitButton = createEvent();