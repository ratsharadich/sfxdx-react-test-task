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

/** Количество токентов А */
export const $tokenAAmount = createStore<string>("");

/** Токен B */
export const $tokenB = createStore<string>("");

/** Ограничение на цену за токен */
export const $priceLimit = createStore<string>("");

/** Количество токенов В */
export const $tokenBAmount = combine(
  [$tokenAAmount, $priceLimit],
  ([tokenAAmount, priceLimit]) => {
    const limit = priceLimit || 0;
    return String(
      limit ? Number(tokenAAmount) * Number(limit) : tokenAAmount
    );
  }
);

/** Открыто ли модальное окно деталей оредара */
export const $isModalOpened = createStore<boolean>(false);

/** Ожидаемая цена сделки */
export const $expectedOrderPrice = combine(
  [$priceLimit, $tokenAAmount],
  ([priceLimit, tokenAmount]) => Number(priceLimit) * Number(tokenAmount)
);
