import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, TRANSACTION_TYPES } from "src/shared";

import { BUY, SELL } from "../../constants";
import { buttonClassName } from "./constants";

/** Переключатель между Buy и Sell */
export const TransactionTypeSelector: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const isBuy = searchParams.get(TRANSACTION_TYPES.BUY) === "true";
  const isSell = searchParams.get(TRANSACTION_TYPES.SELL) === "true";

  const handleBuyButtonClick = () => {
    const { sell, ...newParams } = params;
    newParams[TRANSACTION_TYPES.BUY] = "true";
    setSearchParams(newParams);
  };

  const handleSellButtonClick = () => {
    const { buy, ...newParams } = params;
    newParams[TRANSACTION_TYPES.SELL] = "true";
    setSearchParams(newParams);
  };

  return (
    <div className="flex items-center justify-between p-[0.25rem] max-w-[19.5rem] h-[2.75rem] bg-background-gray rounded-[0.5rem]">
      <Button className={buttonClassName(!isBuy)} onClick={handleBuyButtonClick}>
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
