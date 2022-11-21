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

export interface MarketType {
  /** Маркетный токен или лимитный (если false) */
  isMarket: boolean;
}

export type GetMatchingOrdersFnArgs = TokensData & MarketType;

export type GetMatchingOrdersFn = (
  args: GetMatchingOrdersFnArgs
) => Promise<string[]>;

export type GetOrdersFnArgs = Omit<TokensData, "tokenAmount" | "priceLimit"> & {
  /** id пользователя */
  userId: string;

  /** Параметр active (по умолчанию false) задает выдачу только не закрытых заявок */
  active: boolean;
};

export type GetOrdersFn = (
  args: GetOrdersFnArgs
) => Promise<Array<Record<string, string>>>;
