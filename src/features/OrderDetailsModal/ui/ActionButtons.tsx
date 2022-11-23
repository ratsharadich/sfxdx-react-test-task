import cn from "classnames";
import { useEvent } from "effector-react";
import { FC } from "react";
import { Button } from "src/shared";

import { MATCH, PLACE_ORDER } from "../constants";
import { ActionButtonProps } from "../interfaces";
import { clickedMatchOrders, clickedPlaceOrder } from "../model";

/** Кнопка Match и PlaceOrder */
export const ActionButtons: FC<ActionButtonProps> = ({
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
    <div className="flex gap-0.5">
      <Button
        active={isMatchButtonActive}
        className={cn("!w-10", {
          "pointer-events-none": !isMatchButtonActive,
        })}
        onClick={handleMatchOrdersButtonClick}
      >
        {MATCH}
      </Button>

      <Button
        active={isPlaceOrderButtonActive}
        className={cn("!w-10", {
          "pointer-events-none": !isPlaceOrderButtonActive,
        })}
        onClick={handlePlaceOrderButtonClick}
      >
        {PLACE_ORDER}
      </Button>
    </div>
  );
};
