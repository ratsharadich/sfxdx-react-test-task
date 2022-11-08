import React, { FC } from "react";
import { EXPECTED_ORDER_PRICE, outputClassName } from "../../constants";

/** Вывод формы размещения order */
export const Output: FC<{ ref: React.Ref<HTMLOutputElement> }> = ({ ref }) => {
  return (
    <output name="orderPrice" className={outputClassName} ref={ref}>
      {EXPECTED_ORDER_PRICE}
    </output>
  );
};
