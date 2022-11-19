import { createEffect } from "effector";
import { contractMethods, eth } from "src/shared";

import { setAccountsToStorage } from "../lib";

/** Запрашиваем аккаунты из Metamask */
export const fetchAccountsFx = createEffect<undefined, string[]>(async () => {
  const accounts = await eth.requestAccounts();
  setAccountsToStorage(accounts);
  return accounts;
});

/** Создаём ордер */
export const createOrderFX = createEffect<
{
  tokenA: string
  tokenB: string
  tokenAAmount: number
  tokenBLimitPrice: number
},
void
>(async ({ tokenA, tokenB, tokenAAmount, tokenBLimitPrice }) => {
  await contractMethods.createOrder(
    tokenA,
    tokenB,
    tokenAAmount,
    tokenBLimitPrice
  );
});
