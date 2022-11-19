export interface getMatchingOrdersFnArgs {
  /** Токен А */
  tokenA: string;

  /* Токен В */
  tokenB: string;

  /* Количество токенов для операции */
  tokenAmount: string;

  /** Ограничение цены за токен */
  priceLimit: string;

  /** Маркетный токен или лимитный (если false) */
  isMarket: boolean;
}

export type getMatchingOrdersFn = (
  args: getMatchingOrdersFnArgs
) => Promise<string[]>;
