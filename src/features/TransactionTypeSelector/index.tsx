import { useEvent, useStore } from "effector-react";
import { FC } from "react";
import { $isBuy, $isSell, setBuy, setSell } from "src/features";
import { Button } from "src/shared";

import { buttonClassName, BUY, SELL, transactionTypeSelectorClassName } from "./constants";

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
    <div className={transactionTypeSelectorClassName}>
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
