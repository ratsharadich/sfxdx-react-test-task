import cn from "classnames";

export const inputClassName = (className?: string) =>
  cn(
    className,
    [
      "relative",
      "bg-background-gray",
      "border",
      "border-border-gray",
      "rounded-0.5",
      "h-full",
      "w-full",
      "px-1",
      "py-0.75",
      "invalid:border-[red]",
    ].join(" ")
  );

export const INVALID_WARNING = 'Invalid input';
