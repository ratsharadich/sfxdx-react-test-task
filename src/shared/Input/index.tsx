import React, { FC } from "react";
import { inputClassName } from "./constants";

/** Стилизованный input */
export const Input: FC<{
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
  className?: string;
}> = ({ disabled, placeholder, value, onChange, ref, className }) => {
  return (
    <input
      disabled={disabled}
      placeholder={placeholder}
      className={inputClassName(className)}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
};
