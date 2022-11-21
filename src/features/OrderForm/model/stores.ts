import { combine, createStore } from "effector";

/** Включены ли лимитные сделки */
export const $isLimit = createStore<boolean>(true);

/** Включены ли сделки по рыночной цене */
export const $isMarket = createStore<boolean>(false);

/** Выбрана покупка токенов */
export const $isBuy = createStore<boolean>(true);

/** Выбрана продажа токенов */
export const $isSell = createStore<boolean>(false);

/** Токен А */
export const $tokenA = createStore<string>("");

/** Количество токентов для операции */
export const $tokenAmount = createStore<string>("");

/** Токен B */
export const $tokenB = createStore<string>("");

/** Ограничение на цену за токен */
export const $priceLimit = createStore<string>("");

/** Открыто ли модальное окно деталей оредара */
export const $isModalOpened = createStore<boolean>(false);

/** Противоположные ордеры с бэка */
export const $matchedOrders = createStore<string[]>([]);

/** Загружаются ли совпадения оредров */
export const $isMatchingOrdersLoading = createStore<boolean>(false);

/** Ожидаемая цена сделки */
export const $expectedOrderPrice = combine(
  [$priceLimit, $tokenAmount],
  ([priceLimit, tokenAmount]) => Number(priceLimit) * Number(tokenAmount)
);
