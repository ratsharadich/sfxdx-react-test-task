import React, { FC, useCallback, useEffect, useRef, useState } from "react";

import {
  TOKEN_A,
  TOKEN_A_AMOUNT,
  TOKEN_B,
  TOKEN_B_LIMIT_PRICE,
} from "./constants";

import { getOrders, Input } from "src/shared";
import { InputsBlock, Output, SubmitButton } from "./ui";

/** Форма заполнения для публикации order */
export const OrderForm: FC = () => {
  const tokenAInputRef = useRef<HTMLInputElement>(null);
  const tokenAAmountInputRef = useRef<HTMLInputElement>(null);

  const tokenBInputRef = useRef<HTMLInputElement>(null);
  const tokenBLimitPriceInputRef = useRef<HTMLInputElement>(null);

  const [isSubmitButtonActive, setSubmitButtonActive] =
    useState<boolean>(false);

  const handleChangeSubmitButtonActive = useCallback((status: boolean) => {
    setSubmitButtonActive(status);
  }, []);

  console.log(isSubmitButtonActive, "isSubmitButtonActive");

  const outputRef = useRef<HTMLOutputElement>(null);

  const handleFormInput = useCallback(() => {
    if (outputRef.current) {
      outputRef.current.value = "123";
    }
  }, []);

  const handleFormSubmit = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (outputRef.current) {
      outputRef.current.value = "123";
    }
  }, []);

  return (
    <form
      name="orderForm"
      action={getOrders}
      method="GET"
      className="flex flex-col gap-y-[2.5rem]"
      onInput={handleFormInput}
    >
      <div className="grid grid-cols-[5fr_3fr] gap-x-[1.25rem] gap-y-2">
        <InputsBlock
          tokenAInputRef={tokenAInputRef}
          tokenAAmountInputRef={tokenAAmountInputRef}
          tokenBInputRef={tokenBInputRef}
          tokenBLimitPriceInputRef={tokenBLimitPriceInputRef}
          onChange={handleChangeSubmitButtonActive}
        />

        <Output ref={outputRef} />
      </div>

      <SubmitButton onClick={handleFormSubmit} active={isSubmitButtonActive} />
    </form>
  );
};
