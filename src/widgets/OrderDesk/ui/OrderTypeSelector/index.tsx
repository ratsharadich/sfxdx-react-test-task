import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { ORDER_TYPES } from "src/shared";

import { LIMIT, MARKET } from "../../constants";
import { buttonClassName } from "./constants";

/** Переключатель между limit и market */
export const OrderTypeSelector: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const isLimit = searchParams.get(ORDER_TYPES.LIMIT) === "true";
  const isMarket = searchParams.get(ORDER_TYPES.MARKET) === "true";

  const handleLimitButtonClick = () => {
    const { market, ...newParams } = params;
    newParams[ORDER_TYPES.LIMIT] = "true";
    setSearchParams(newParams);
  };

  const handleMarketButtonClick = () => {
    const { limit, ...newParams } = params;
    newParams[ORDER_TYPES.MARKET] = "true";
    setSearchParams(newParams);
  };

  return (
    <div className="flex gap-1.5 font-inter font-bold text-gray">
      <button
        className={buttonClassName(isLimit)}
        onClick={handleLimitButtonClick}
      >
        {LIMIT}
      </button>

      <button
        className={buttonClassName(isMarket)}
        onClick={handleMarketButtonClick}
      >
        {MARKET}
      </button>
    </div>
  );
};
