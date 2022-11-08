import React, { FC } from "react";
import { EXPECTED_ORDER_PRICE, outputClassName } from "../../constants";

/** Вывод формы размещения order */
export const Output: FC<{ innerRef: React.Ref<HTMLOutputElement> }> = ({ innerRef }) => {
  return (
    <output name="orderPrice" className={outputClassName} ref={innerRef}>
      {EXPECTED_ORDER_PRICE}
    </output>
  );
};
