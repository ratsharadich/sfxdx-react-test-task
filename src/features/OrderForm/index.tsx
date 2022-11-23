import cn from "classnames";
import { useEvent, useStore } from "effector-react";
import { FC, useCallback, useRef } from "react";
import { Button, Spinner } from "src/shared";

import {
  PLACE_THE_ORDER_BUTTON,
  PLACE_THE_ORDER_BUTTON_LOADING,
} from "./constants";
import {
  $isLimit,
  $isMarket,
  $isModalOpened,
  $priceLimit,
  $tokenA,
  $tokenAAmount,
  $tokenB,
  setModalStatus,
} from "./model";
import { InputsBlock, Output } from "./ui";

/** Форма заполнения для публикации order */
export const OrderForm: FC = () => {
  const isLimit = useStore($isLimit);
  const isMarket = useStore($isMarket);

  const tokenA = useStore($tokenA);
  const tokenB = useStore($tokenB);

  const tokenAmount = useStore($tokenAAmount);
  const priceLimit = useStore($priceLimit);

  const isModalOpened = useStore($isModalOpened);

  const isSubmitButtonActive =
    Boolean(
      (isLimit && tokenA && tokenB && tokenAmount && priceLimit) ||
        (isMarket && tokenA && tokenB && tokenAmount)
    ) && !isModalOpened;

  const setModalStatusEvent = useEvent(setModalStatus);

  const outputRef = useRef<HTMLOutputElement>(null);

  const handleFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setModalStatusEvent(true);
  }, []);

  return (
    <form
      name="orderForm"
      className="flex flex-col gap-y-2.5 z-10"
      onSubmit={handleFormSubmit}
    >
      <div className="grid md:grid-cols-5fr.3fr max-md:grid-cols-1 gap-x-1.25 gap-y-2">
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
        className={cn({
          "!w-17.5": isModalOpened,
          "pointer-events-none": !isSubmitButtonActive,
        })}
        active={isSubmitButtonActive}
      >
        {isModalOpened ? (
          <div className="flex justify-center items-center gap-0.5">
            <Spinner />
            <span>{PLACE_THE_ORDER_BUTTON_LOADING}</span>
          </div>
        ) : (
          PLACE_THE_ORDER_BUTTON
        )}
      </Button>
    </form>
  );
};
