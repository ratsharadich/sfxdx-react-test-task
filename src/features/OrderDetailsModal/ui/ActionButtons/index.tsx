import cn from "classnames";
import { useEvent } from "effector-react";
import { FC } from "react";
import { Button } from "src/shared";

import { MATCH, PLACE_ORDER } from "../../constants";
import { clickedMatchOrders, clickedPlaceOrder } from "../../model";

export const ActionButtons: FC<{ areOrders: boolean; isloading: boolean }> = ({
  areOrders,
  isloading,
}) => {
  const isMatchButtonActive = areOrders && !isloading;
  const isPlaceOrderButtonActive = !areOrders && !isloading;

  const clickedMatchOrdersEvent = useEvent(clickedMatchOrders);
  const clickedPlaceOrderEvent = useEvent(clickedPlaceOrder);

  const handleMatchOrdersButtonClick = () => {
    clickedMatchOrdersEvent();
  };
  const handlePlaceOrderButtonClick = () => {
    clickedPlaceOrderEvent();
  };

  return (
    <div className="flex gap-[0.5rem]">
      <Button
        active={isMatchButtonActive}
        className={cn("!w-[10rem]", {
          "pointer-events-none": !isMatchButtonActive,
        })}
        onClick={handleMatchOrdersButtonClick}
      >
        {MATCH}
      </Button>

      <Button
        active={isPlaceOrderButtonActive}
        className={cn("!w-[10rem]", {
          "pointer-events-none": !isPlaceOrderButtonActive,
        })}
        onClick={handlePlaceOrderButtonClick}
      >
        {PLACE_ORDER}
      </Button>
    </div>
  );
};
