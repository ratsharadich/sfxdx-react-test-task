import cn from 'classnames';
import { FC } from "react";
import { Button } from "src/shared";

import { MATCH, PLACE_ORDER } from "../../constants";

export const ActionButtons: FC<{ areOrders: boolean, isloading: boolean }> = ({
  areOrders,
  isloading,
}) => {
  const isMatchButtonActive = areOrders && !isloading;
  const isPlaceOrderButtonActive = !areOrders && !isloading;

  return (
    <div className="flex gap-[0.5rem]">
      <Button
        active={isMatchButtonActive}
        className={cn("!w-[10rem]", {
          "pointer-events-none": !isMatchButtonActive,
        })}
      >
        {MATCH}
      </Button>
      <Button
        active={isPlaceOrderButtonActive}
        className={cn("!w-[10rem]", {
          "pointer-events-none": !isPlaceOrderButtonActive,
        })}
      >
        {PLACE_ORDER}
      </Button>
    </div>
  );
};
