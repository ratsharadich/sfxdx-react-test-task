import cn from "classnames";

export const commonButtonClassName = "w-9.25 h-2.25 !bg-green text-white";

export const notSelectedButtonClassName =
  "!bg-transparent font-inter !text-gray font-bold";

export const sideButtonClassName = (isNotActive: boolean) =>
  cn(commonButtonClassName, { [notSelectedButtonClassName]: isNotActive });

export const transactionTypeSelectorClassName = [
  "flex",
  "items-center",
  "justify-between",
  "p-0.25",
  "max-w-19.5",
  "h-2.75",
  "bg-background-gray",
  "rounded-0.5",
].join(" ");

export const BUY = "Buy";
export const SELL = "Sell";
