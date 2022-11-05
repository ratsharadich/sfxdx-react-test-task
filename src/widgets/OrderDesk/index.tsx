import { FC } from "react";
import { orderDeskGridClassName } from "./constants";
import { MyOrders, OrderBook, PlaceTheOrder } from "./ui";

/** Грид с панелями */
export const OrderDesk: FC = () => {
  return (
    <section className={orderDeskGridClassName} data-testid="OrderDesk.Grid">
      <PlaceTheOrder />
      <OrderBook />
      <MyOrders />
    </section>
  );
};
