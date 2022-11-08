import { FC, useCallback, useState } from "react";

import { limitClassName, marketClassName } from "./constants";
import { ButtonType } from "./interfaces";

import { LIMIT, MARKET } from "../../constants";

/** Переключатель между limit и market */
export const OrderTypeSelector: FC = () => {
  const [type, selectType] = useState<ButtonType>(LIMIT);

  const handleLimitButtonClick = useCallback(() => selectType(LIMIT), []);
  const handleMarketButtonClick = useCallback(() => selectType(MARKET), []);

  return (
    <div className="flex gap-1.5 font-inter font-bold text-gray">
      <button className={limitClassName(type)} onClick={handleLimitButtonClick}>
        {LIMIT}
      </button>

      <button
        className={marketClassName(type)}
        onClick={handleMarketButtonClick}
      >
        {MARKET}
      </button>
    </div>
  );
};
