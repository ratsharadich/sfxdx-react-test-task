import cn from "classnames";
import { useEvent, useStore } from "effector-react";
import { FC, useCallback, useRef } from "react";
import { Button } from "src/shared";

import { PLACE_THE_ORDER_BUTTON } from "./constants";
import {
  $isLimit,
  $isMarket,
  $priceLimit,
  $tokenA,
  $tokenAmount,
  $tokenB,
  clickedSubmitButton,
  createOrderFX,
} from "./model";
import { InputsBlock, Output } from "./ui";

/** Форма заполнения для публикации order */
export const OrderForm: FC = () => {
  const isLimit = useStore($isLimit);
  const isMarket = useStore($isMarket);

  const tokenA = useStore($tokenA);
  const tokenB = useStore($tokenB);

  const tokenAmount = useStore($tokenAmount);
  const priceLimit = useStore($priceLimit);

  const isSubmitButtonActive = Boolean(
    (isLimit && tokenA && tokenB && tokenAmount && priceLimit) ||
      (isMarket && tokenA && tokenB && tokenAmount)
  );

  const clickedSubmitButtonEvent = useEvent(clickedSubmitButton);

  const outputRef = useRef<HTMLOutputElement>(null);

  const handleFormInput = useCallback(() => {
    // if (outputRef.current != null) {
    //   outputRef.current.value = '123'
    // }
  }, []);

  const handleFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    clickedSubmitButtonEvent();
    // await createOrderFX({
    //   tokenA: "0x22961F4EB722B9582E9743a662e6f1c051add4df",
    //   tokenB: "0x2486acF9aca15a4B43eAa00f17B3fA1e4773b295",
    //   tokenAmount: 2,
    //   priceLimit: 1,
    // });
  }, []);

  return (
    <form
      name="orderForm"
      className="flex flex-col gap-y-[2.5rem] z-10"
      onInput={handleFormInput}
      onSubmit={handleFormSubmit}
    >
      <div className="grid md:grid-cols-[5fr_3fr] max-md:grid-cols-1 gap-x-[1.25rem] gap-y-2">
        <InputsBlock
          isMarket={isMarket}
          tokenA={tokenA}
          tokenB={tokenB}
          tokenAmount={tokenAmount}
          priceLimit={priceLimit}
        />

        <Output innerRef={outputRef} />
      </div>

      {/** submit button */}
      <Button
        type="submit"
        className={cn({ "pointer-events-none": !isSubmitButtonActive })}
        active={isSubmitButtonActive}
      >
        {PLACE_THE_ORDER_BUTTON}
      </Button>
    </form>
  );
};
