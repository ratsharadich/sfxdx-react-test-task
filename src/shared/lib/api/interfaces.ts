export interface TokensData {
  /** Токен А */
  tokenA: string;

  /* Токен В */
  tokenB: string;

  /* Количество токенов для операции */
  tokenAmount: string;

  /** Ограничение цены за токен */
  priceLimit: string;
}

export type GetMatchingOrdersFnArgs = TokensData & {
  /** Маркетный токен или лимитный (если false) */
  isMarket: boolean;
};

export type GetMatchingOrdersFn = (
  args: GetMatchingOrdersFnArgs
) => Promise<string[]>;
