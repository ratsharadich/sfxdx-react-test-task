import cn from "classnames";

export const gridTileClassName = (className?: string) =>
  cn("flex flex-col bg-white rounded-2xl py-2.25 px-2 ", className);

export const orderDeskGridClassName = [
  "grid",
  "grid-cols-3fr.1fr",
  "gap-1.25",
  "w-full",
  "h-full",
  "px-4.5",
  "pt-2.75",
  "pb-5",
].join(" ");

export const PLACE_THE_HOLDER = "Place the Order";
export const ORDER_BOOK = "Order Book";
export const MY_ORDERS = "My Orders";
