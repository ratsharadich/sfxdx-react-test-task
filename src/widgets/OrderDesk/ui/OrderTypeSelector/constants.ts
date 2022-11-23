import cn from "classnames";

const commonButtonClassName =
  "flex items-center justify-center cursor-pointer h-2.25 w-4.5";

const selectedButtonClassName = "border-b-2 border-green text-black";

export const buttonClassName = (isActive: boolean) =>
  cn(commonButtonClassName, {
    [selectedButtonClassName]: isActive,
  });
