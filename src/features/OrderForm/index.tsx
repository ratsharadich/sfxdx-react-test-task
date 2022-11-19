import cn from "classnames";
import React, { FC, useCallback, useRef, useState } from "react";
import { Button } from "src/shared";

import { PLACE_THE_ORDER_BUTTON } from "./constants";
import { InputsBlock, Output } from "./ui";

/** Форма заполнения для публикации order */
export const OrderForm: FC = () => {
  const [isSubmitButtonActive, setSubmitButtonActive] =
    useState<boolean>(false);

  const handleChangeSubmitButtonActive = useCallback((status: boolean) => {
    setSubmitButtonActive(status);
  }, []);

  const outputRef = useRef<HTMLOutputElement>(null);

  const handleFormInput = useCallback(() => {
    // if (outputRef.current != null) {
    //   outputRef.current.value = '123'
    // }
  }, []);

  // const [orders, setOrders] = useState<AxiosResponse<any, any>>();
  const handleFormSubmit = useCallback(async (e: React.MouseEvent) => {
    // e.preventDefault();
    // const { data } = await getOrders;
    // setOrders(data);
  }, []);

  return (
    <form
      name="orderForm"
      className="flex flex-col gap-y-[2.5rem] z-10"
      onInput={handleFormInput}
    >
      <div className="grid md:grid-cols-[5fr_3fr] max-md:grid-cols-1 gap-x-[1.25rem] gap-y-2">
        <InputsBlock onChange={handleChangeSubmitButtonActive} />

        <Output innerRef={outputRef} />
      </div>

      {/** submit button */}
      <Button
        className={cn({ "pointer-events-none": !isSubmitButtonActive })}
        onClick={handleFormSubmit}
        active={isSubmitButtonActive}
      >
        {PLACE_THE_ORDER_BUTTON}
      </Button>
    </form>
  );
};
