import cn from "classnames";
import { LIMIT, MARKET } from "../../constants";
import { ButtonType } from "./interfaces";

const commonButtonClassName =
  "flex items-center justify-center cursor-pointer h-[2.25rem] w-[4.5rem]";
const selectedButtonClassName = "border-b-2 border-[#08D899] text-black";

export const limitClassName = (button: ButtonType) =>
  cn(commonButtonClassName, {
    [selectedButtonClassName]: button === LIMIT,
  });

export const marketClassName = (button: ButtonType) =>
  cn(commonButtonClassName, {
    [selectedButtonClassName]: button === MARKET,
  });
