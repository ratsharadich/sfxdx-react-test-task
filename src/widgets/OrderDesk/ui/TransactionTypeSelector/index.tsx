import { FC, useCallback, useState } from "react";
import { Button } from "src/shared";

import {
  buyButtonClassName,
  commonButtonClassName,
  sellButtonClassName,
} from "./constants";
import { ButtonType } from "./interfaces";

import { BUY, SELL } from "../../constants";

/** Переключатель между Buy и Sell */
export const TransactionTypeSelector: FC = () => {
  const [type, selectType] = useState<ButtonType>(BUY);

  const handleBuyButtonClick = useCallback(() => selectType(BUY), []);
  const handleSellButtonClick = useCallback(() => selectType(SELL), []);

  return (
    <div className="flex items-center justify-between p-[0.25rem] max-w-[19.5rem] h-[2.75rem] bg-background-gray rounded-[0.5rem]">
      <Button
        className={buyButtonClassName(type)}
        onClick={handleBuyButtonClick}
      >
        {BUY}
      </Button>
      <Button
        className={sellButtonClassName(type)}
        onClick={handleSellButtonClick}
      >
        {SELL}
      </Button>
    </div>
  );
};
