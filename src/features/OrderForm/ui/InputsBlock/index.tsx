import cn from "classnames";
import { useStore } from "effector-react";
import React, { FC, useCallback, useEffect, useState } from "react";
import { $isLogin } from "src/entities";
import { Input } from "src/shared";
import { $isLimit, $isMarket } from "src/widgets";

import {
  TOKEN_A,
  TOKEN_A_AMOUNT,
  TOKEN_B,
  TOKEN_B_LIMIT_PRICE,
} from "../../constants";

/** Блок инпутов формы размещения orders */
export const InputsBlock: FC<{
  onChange: (status: boolean) => void;
}> = ({ onChange }) => {
  const isLimit = useStore($isLimit);
  const isMarket = useStore($isMarket);

  const isNotLogin = !useStore($isLogin);

  const [tokenAValue, setTokenAValue] = useState<string>("");
  const handleChangeTokenA = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTokenAValue(e.target.value);
    },
    []
  );

  const [tokenAAmountValue, setTokenAAmountValue] = useState<string>("");
  const handleChangeTokenAAmount = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTokenAAmountValue(e.target.value);
    },
    []
  );

  const [tokenBValue, setTokenBValue] = useState<string>("");
  const handleChangeTokenB = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTokenBValue(e.target.value);
    },
    []
  );

  const [tokenBLimitPriceValue, setTokenBLimitPriceValue] =
    useState<string>("");
  const handleChangeTokenBLimitPrice = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTokenBLimitPriceValue(e.target.value);
    },
    [isMarket]
  );

  const isSubmitButtonDisabled =
    (isLimit &&
      tokenAValue &&
      tokenAAmountValue &&
      tokenBValue &&
      tokenBLimitPriceValue) ||
    (isMarket && tokenAValue && tokenAAmountValue && tokenBValue);

  useEffect(() => {
    if (isMarket) {
      setTokenBLimitPriceValue("");
    }

    if (isSubmitButtonDisabled) {
      onChange(true);
      return;
    }

    onChange(false);
  }, [
    isLimit,
    isMarket,
    tokenAValue,
    tokenAAmountValue,
    tokenBValue,
    tokenBLimitPriceValue,
    onChange,
  ]);

  return (
    <>
      <Input
        placeholder={TOKEN_A}
        value={tokenAValue}
        onChange={handleChangeTokenA}
        disabled={isNotLogin}
      />
      <Input
        placeholder={TOKEN_A_AMOUNT}
        value={tokenAAmountValue}
        onChange={handleChangeTokenAAmount}
        disabled={isNotLogin}
      />

      <Input
        placeholder={TOKEN_B}
        value={tokenBValue}
        onChange={handleChangeTokenB}
        disabled={isNotLogin}
      />
      <Input
        className={cn({ invisible: isMarket })}
        placeholder={TOKEN_B_LIMIT_PRICE}
        value={tokenBLimitPriceValue}
        onChange={handleChangeTokenBLimitPrice}
        disabled={isNotLogin}
      />
    </>
  );
};
