import { FC, useCallback, useState } from "react";

import { limitClassName, marketClassName } from "./constants";
import { ButtonType } from "./interfaces";

import { LIMIT, MARKET } from "../../constants";

/** Переключатель между limit и market */
export const OrderTypeSelector: FC = () => {
  const [button, setButton] = useState<ButtonType>(LIMIT);

  const handleLimitButtonClick = useCallback(() => setButton(LIMIT), []);
  const handleMarketButtonClick = useCallback(() => setButton(MARKET), []);

  console.log(button, "button");

  return (
    <div className="flex gap-1.5 font-inter font-bold text-gray">
      <div className={limitClassName(button)} onClick={handleLimitButtonClick}>
        {LIMIT}
      </div>

      <div
        className={marketClassName(button)}
        onClick={handleMarketButtonClick}
      >
        {MARKET}
      </div>
    </div>
  );
};
