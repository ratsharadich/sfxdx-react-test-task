import { useEvent, useStore } from "effector-react";
import { FC } from "react";
import { Button } from "src/shared";

import { BUY, SELL } from "../../constants";
import { $isBuy, $isSell, setBuy, setSell } from "../../model";
import { buttonClassName } from "./constants";

/** Переключатель между Buy и Sell */
export const TransactionTypeSelector: FC = () => {
  const isBuy = useStore($isBuy);
  const isSell = useStore($isSell);

  const setBuyEvent = useEvent(setBuy);
  const setSellEvent = useEvent(setSell);

  const handleBuyButtonClick = () => {
    setBuyEvent(true);
    setSellEvent(false);
  };

  const handleSellButtonClick = () => {
    setBuyEvent(false);
    setSellEvent(true);
  };

  return (
    <div className="flex items-center justify-between p-[0.25rem] max-w-[19.5rem] h-[2.75rem] bg-background-gray rounded-[0.5rem]">
      <Button
        className={buttonClassName(!isBuy)}
        onClick={handleBuyButtonClick}
      >
        {BUY}
      </Button>

      <Button
        className={buttonClassName(!isSell)}
        onClick={handleSellButtonClick}
      >
        {SELL}
      </Button>
    </div>
  );
};
