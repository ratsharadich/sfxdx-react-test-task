import cn from "classnames";

export const outputClassName = (isExpectedOrderPrice: boolean) =>
  cn(
    [
      "flex",
      "px-1",
      "py-0.75",
      "items-center",
      "w-17.5",
      "h-3.125",
      "bg-background-gray",
      "rounded-0.5",
      "text-placeholder-gray",
      "border",
      "border-border-gray",
      "overflow-x-scroll",
      "whitespace-pre",
    ].join(" "),
    {
      "bg-light-green text-black border-green": isExpectedOrderPrice,
    }
  );

export const TOKEN_A_PLACEHOLDER = "Token A smart contract address";
export const TOKEN_A_ID = "TOKEN_A_ID";

export const TOKEN_A_AMOUNT_PLACEHOLDER = "Token A amount";
export const TOKEN_A_AMOUNT_ID = "TOKEN_A_AMOUNT_ID";

export const TOKEN_B_PLACEHOLDER = "Token B smart contract address";
export const TOKEN_B_ID = "TOKEN_B_ID";

export const TOKEN_B_LIMIT_PRICE_PLACEHOLDER = "Limit price (in Token B)";
export const TOKEN_A_LIMIT_PRICE_PLACEHOLDER = "Limit price (in Token A)";
export const TOKEN_LIMIT_PRICE_ID = "TOKEN_B_LIMIT_PRICE_ID";

export const EXPECTED_ORDER_PRICE_PLACEHOLDER = "Expected order price";
export const EXPECTED_ORDER_PRICE = "Token B (including fee 3%)";
export const OUTPUT_ID = "OUTPUT_ID";

export const PLACE_THE_ORDER_BUTTON = "Place the order";
export const PLACE_THE_ORDER_BUTTON_LOADING = "Searching for best price";

export const TOKEN_PATTERN = "^0x[a-fA-F0-9]{40}$";
export const AMOUNT_PATTERN = "^(0|[^0-][1-9]?[0-9]*)([.][1-9]+)?$";
