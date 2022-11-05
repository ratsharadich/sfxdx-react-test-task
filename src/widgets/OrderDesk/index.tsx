import { FC } from "react";
import { MyOrders, OrderBook, PlaceTheOrder } from "./ui";

/** Грид с панелями */
export const OrderDesk: FC = () => {
  return (
    <section className="grid grid-cols-[minmax(60.75rem,_3fr)_minmax(19.75rem,_1fr)] grid-rows-[minmax(32rem,_1.2fr)_minmax(20.75rem,_1fr)] gap-[1.25rem] w-full h-full px-[4.5rem] pt-[2.75rem] pb-5">
      <PlaceTheOrder />
      <OrderBook />
      <MyOrders />
    </section>
  );
};
