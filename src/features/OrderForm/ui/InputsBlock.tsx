import cn from "classnames";
import { useEvent, useStore } from "effector-react";
import { FC, useCallback, useEffect, useState } from "react";
import { $isLogin, $isNetworkCorrect } from "src/entities";
import {
  $isSell,
  setPriceLimit,
  setTokenA,
  setTokenAmount,
  setTokenB,
} from "src/features";
import { Input } from "src/shared";

import {
  AMOUNT_PATTERN,
  TOKEN_A_AMOUNT_ID,
  TOKEN_A_AMOUNT_PLACEHOLDER,
  TOKEN_A_ID,
  TOKEN_A_LIMIT_PRICE_PLACEHOLDER,
  TOKEN_A_PLACEHOLDER,
  TOKEN_B_ID,
  TOKEN_B_LIMIT_PRICE_PLACEHOLDER,
  TOKEN_B_PLACEHOLDER,
  TOKEN_LIMIT_PRICE_ID,
  TOKEN_PATTERN,
} from "../constants";
import { InputsBlockProps } from "../interfaces";

/** Блок инпутов формы размещения orders */
export const InputsBlock: FC<InputsBlockProps> = ({ isMarket, tokenA, tokenB, tokenAmount, priceLimit }) => {
  const isNotLogin = !useStore($isLogin);
  const isNetworkCorrect = useStore($isNetworkCorrect);
  const isInputDisabled = isNotLogin || !isNetworkCorrect;

  const isSell = useStore($isSell);
  const limitPricePlaceHolder = isSell
    ? TOKEN_A_LIMIT_PRICE_PLACEHOLDER
    : TOKEN_B_LIMIT_PRICE_PLACEHOLDER;

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
        pattern={TOKEN_PATTERN}
        placeholder={TOKEN_A_PLACEHOLDER}
        value={tokenA}
        onChange={handleChangeTokenA}
        disabled={isInputDisabled}
      />
      <Input
        id={TOKEN_A_AMOUNT_ID}
        label={TOKEN_A_AMOUNT_PLACEHOLDER}
        pattern={AMOUNT_PATTERN}
        placeholder={TOKEN_A_AMOUNT_PLACEHOLDER}
        value={tokenAmount}
        onChange={handleChangeTokenAAmount}
        disabled={isInputDisabled}
      />

      <Input
        id={TOKEN_B_ID}
        pattern={TOKEN_PATTERN}
        label={TOKEN_B_PLACEHOLDER}
        placeholder={TOKEN_B_PLACEHOLDER}
        value={tokenB}
        onChange={handleChangeTokenB}
        disabled={isInputDisabled}
      />
      <Input
        id={TOKEN_LIMIT_PRICE_ID}
        label={limitPricePlaceHolder}
        pattern={AMOUNT_PATTERN}
        className={cn({ invisible: isMarket })}
        placeholder={limitPricePlaceHolder}
        value={priceLimit}
        onChange={handleChangeTokenBLimitPrice}
        disabled={isInputDisabled}
      />
    </>
  );
};
