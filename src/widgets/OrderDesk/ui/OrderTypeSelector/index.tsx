import { useEvent, useStore } from "effector-react";
import { FC } from "react";

import { LIMIT, MARKET } from "../../constants";
import { $isLimit, $isMarket, setLimit, setMarket } from "../../model";
import { buttonClassName } from "./constants";

/** Переключатель между limit и market */
export const OrderTypeSelector: FC = () => {
  const isLimit = useStore($isLimit);
  const isMarket = useStore($isMarket);

  const setLimitEvent = useEvent(setLimit);
  const setMarketEvent = useEvent(setMarket);

  const handleLimitButtonClick = () => {
    setLimitEvent(true);
    setMarketEvent(false);
  };

  const handleMarketButtonClick = () => {
    setLimitEvent(false);
    setMarketEvent(true);
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
