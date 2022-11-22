export interface TokensData {
  /** Токен А */
  tokenA: string;

  /* Токен В */
  tokenB: string;

  /* Количество токенов для покупки */
  tokenAAmount: string;

  /** Количество токенов продажи */
  tokenBAmount: string;
}

export interface MarketType {
  /** Маркетный токен или лимитный (если false) */
  isMarket: boolean;
}

export type GetMatchingOrdersFnArgs = TokensData & MarketType;

export type GetMatchingOrdersFn = (
  args: GetMatchingOrdersFnArgs
) => Promise<string[]>;

export type GetOrdersFnArgs = Omit<TokensData, "tokenAAmount" | "tokenBAmount"> & {
  /** id пользователя */
  userId: string;

  /** Параметр active (по умолчанию false) задает выдачу только не закрытых заявок */
  active: boolean;
};

export type GetOrdersFn = (
  args: GetOrdersFnArgs
) => Promise<Array<Record<string, string>>>;
