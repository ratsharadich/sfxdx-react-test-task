import { useStore } from "effector-react";
import React, { FC } from "react";

import {
  EXPECTED_ORDER_PRICE,
  EXPECTED_ORDER_PRICE_PLACEHOLDER,
  OUTPUT_ID,
  outputClassName,
} from "../../constants";
import { $expectedOrderPrice } from "../../model";

/** Вывод формы размещения order */
export const Output: FC<{
  innerRef: React.Ref<HTMLOutputElement>;
}> = ({ innerRef }) => {
  const expectedOrderPrice = useStore($expectedOrderPrice);

  return (
    <div>
      <output
        id={OUTPUT_ID}
        name="orderPrice"
        className={outputClassName(Boolean(expectedOrderPrice))}
        ref={innerRef}
      >
        {expectedOrderPrice
          ? `${expectedOrderPrice} ${EXPECTED_ORDER_PRICE}`
          : EXPECTED_ORDER_PRICE_PLACEHOLDER}
      </output>

      <label
        className="hidden text-xs font-bold font-inter text-gray"
        htmlFor={OUTPUT_ID}
      >
        {EXPECTED_ORDER_PRICE_PLACEHOLDER}
      </label>
    </div>
  );
};
