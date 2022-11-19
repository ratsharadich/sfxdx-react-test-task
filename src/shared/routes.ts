export enum ORDER_TYPES {
  LIMIT = "limit",
  MARKET = "market",
}

export enum TRANSACTION_TYPES {
  BUY = "buy",
  SELL = "sell",
}

export const baseSearchParams = {
  [ORDER_TYPES.LIMIT]: "true",
  [TRANSACTION_TYPES.BUY]: "true",
};
