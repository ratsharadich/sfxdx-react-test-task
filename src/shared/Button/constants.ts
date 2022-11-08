import cn from "classnames";

export const buttonClassName = (active?: Boolean, className?: string) =>
  cn(
    className,
    "w-[12.5rem] h-[3rem] bg-[#08D899] text-white rounded-lg font-bold text-lg leading-[1.5rem]",
    { "button-shadow": active }
  );
