import cn from "classnames";

export const inputClassName = (className?: string) =>
  cn(
    className,
    [
      "relative",
      "bg-background-gray",
      "border",
      "border-input-border-gray",
      "rounded-[0.5rem]",
      "h-full",
      "w-full",
      "px-[1rem]",
      "py-[0.75rem]",
      "invalid:border-[red]",
    ].join(" ")
  );
