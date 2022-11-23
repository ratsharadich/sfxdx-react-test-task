import cn from "classnames";
import { useStore } from "effector-react";
import { FC } from "react";

import {
  EXPECTED_ORDER_PRICE,
  EXPECTED_ORDER_PRICE_PLACEHOLDER,
  OUTPUT_ID,
  outputClassName,
} from "../../constants";
import { OutputProps } from "../../interfaces";
import { $expectedOrderPrice, $isMarket } from "../../model";

/** Вывод формы размещения order */
export const Output: FC<OutputProps> = ({ innerRef }) => {
  const expectedOrderPrice = useStore($expectedOrderPrice);
  const isMarket = useStore($isMarket);

  return (
    <div>
      <output
        id={OUTPUT_ID}
        name="orderPrice"
        className={cn(outputClassName(Boolean(expectedOrderPrice)), {
          invisible: isMarket,
        })}
        ref={innerRef}
      >
        {expectedOrderPrice
          ? `${expectedOrderPrice} ${EXPECTED_ORDER_PRICE}`
          : EXPECTED_ORDER_PRICE_PLACEHOLDER}
      </output>

      <label
        className={cn("hidden text-xs font-bold font-inter text-gray", {
          invisible: isMarket,
        })}
        htmlFor={OUTPUT_ID}
      >
        {EXPECTED_ORDER_PRICE_PLACEHOLDER}
      </label>
    </div>
  );
};
