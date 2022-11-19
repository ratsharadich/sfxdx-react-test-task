import cn from "classnames";

export const commonButtonClassName =
  "w-[9.25rem] h-[2.25rem] !bg-[#08D899] text-white";
export const notSelectedButtonClassName =
  "!bg-transparent font-inter !text-gray font-bold";

export const buttonClassName = (isNotActive: boolean) =>
  cn(commonButtonClassName, { [notSelectedButtonClassName]: isNotActive });
