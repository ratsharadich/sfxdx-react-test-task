import cn from "classnames";

export const buttonClassName = (active?: Boolean, className?: string) =>
  cn(
    className,
    [
      "w-12.5",
      "h-3",
      "bg-disabled-bg-gray",
      "text-disabled-text-gray",
      "rounded-lg",
      "font-bold",
      "text-lg",
      "leading-1.5",
    ].join(" "),
    { "button-shadow bg-green text-white": active }
  );
