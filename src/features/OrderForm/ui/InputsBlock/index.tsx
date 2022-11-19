import cn from "classnames";
import { useEvent, useStore } from "effector-react";
import { FC, useCallback, useEffect, useState } from "react";
import { $isLogin } from "src/entities";
import {
  setPriceLimit,
  setTokenA,
  setTokenAmount,
  setTokenB,
} from "src/features";
import { Input } from "src/shared";

import {
  TOKEN_A_AMOUNT_ID,
  TOKEN_A_AMOUNT_PLACEHOLDER,
  TOKEN_A_ID,
  TOKEN_A_PLACEHOLDER,
  TOKEN_B_ID,
  TOKEN_B_LIMIT_PRICE_ID,
  TOKEN_B_LIMIT_PRICE_PLACEHOLDER,
  TOKEN_B_PLACEHOLDER,
} from "../../constants";

/** Блок инпутов формы размещения orders */
export const InputsBlock: FC<{
  isMarket: boolean;
  tokenA: string;
  tokenB: string;
  tokenAmount: string;
  priceLimit: string;
}> = ({ isMarket, tokenA, tokenB, tokenAmount, priceLimit }) => {
  const isNotLogin = !useStore($isLogin);

  const setTokenAEvent = useEvent(setTokenA);
  const setTokenAmountEvent = useEvent(setTokenAmount);
  const setTokenBEvent = useEvent(setTokenB);
  const setPriceLimitEvent = useEvent(setPriceLimit);

  const handleChangeTokenA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTokenAEvent(e.target.value);
  };

  const handleChangeTokenAAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTokenAmountEvent(e.target.value);
  };

  const handleChangeTokenB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTokenBEvent(e.target.value);
  };

  const handleChangeTokenBLimitPrice = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPriceLimitEvent(e.target.value);
  };

  useEffect(() => {
    if (isMarket) setPriceLimitEvent("");
  }, [isMarket]);

  return (
    <>
      <Input
        id={TOKEN_A_ID}
        label={TOKEN_A_PLACEHOLDER}
        pattern="^0x[a-fA-F0-9]{40}$"
        placeholder={TOKEN_A_PLACEHOLDER}
        value={tokenA}
        onChange={handleChangeTokenA}
        disabled={isNotLogin}
      />
      <Input
        id={TOKEN_A_AMOUNT_ID}
        label={TOKEN_A_AMOUNT_PLACEHOLDER}
        pattern="^(0|[1-9]\d*)(\.\d+)?$"
        placeholder={TOKEN_A_AMOUNT_PLACEHOLDER}
        value={tokenAmount}
        onChange={handleChangeTokenAAmount}
        disabled={isNotLogin}
      />

      <Input
        id={TOKEN_B_ID}
        pattern="^0x[a-fA-F0-9]{40}$"
        label={TOKEN_B_PLACEHOLDER}
        placeholder={TOKEN_B_PLACEHOLDER}
        value={tokenB}
        onChange={handleChangeTokenB}
        disabled={isNotLogin}
      />
      <Input
        id={TOKEN_B_LIMIT_PRICE_ID}
        label={TOKEN_B_LIMIT_PRICE_PLACEHOLDER}
        pattern="^(0|[1-9]\d*)(\.\d+)?$"
        className={cn({ invisible: isMarket })}
        placeholder={TOKEN_B_LIMIT_PRICE_PLACEHOLDER}
        value={priceLimit}
        onChange={handleChangeTokenBLimitPrice}
        disabled={isNotLogin}
      />
    </>
  );
};
