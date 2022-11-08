import React, { FC, useCallback, useEffect, useState } from "react";
import { Input } from "src/shared";
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
    []
  );

  useEffect(() => {
    if (
      tokenAValue &&
      tokenAAmountValue &&
      tokenBValue &&
      tokenBLimitPriceValue
    ) {
      onChange(true);
      return;
    }

    onChange(false);
  }, [
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
      />
      <Input
        placeholder={TOKEN_A_AMOUNT}
        value={tokenAAmountValue}
        onChange={handleChangeTokenAAmount}
      />

      <Input
        placeholder={TOKEN_B}
        value={tokenBValue}
        onChange={handleChangeTokenB}
      />
      <Input
        placeholder={TOKEN_B_LIMIT_PRICE}
        value={tokenBLimitPriceValue}
        onChange={handleChangeTokenBLimitPrice}
      />
    </>
  );
};
