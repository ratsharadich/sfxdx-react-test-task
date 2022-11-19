import { FC, useEffect, useRef, useState } from "react";

import { inputClassName } from "./constants";
import { InputProps } from "./interfaces";

/** Стилизованный input */
export const Input: FC<InputProps> = ({
  id,
  label,
  type = "text",
  pattern,
  disabled,
  placeholder,
  value,
  onChange,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputValidity = inputRef.current?.validity.valid;

  const [isInputValid, setInputValid] = useState(true);

  useEffect(() => {
    console.log("я тут");

    if (inputValidity) {
      setInputValid(true);
      return;
    }

    setInputValid(false);
  }, [inputValidity]);

  return (
    <div className="relative h-[2.75rem]">
      <input
        id={id}
        type={type}
        pattern={pattern}
        disabled={disabled}
        placeholder={placeholder}
        className={inputClassName(className)}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />

      <label
        className="hidden text-xs font-bold font-inter text-gray"
        htmlFor={id}
      >
        {label}
      </label>

      {!isInputValid && (
        <div className="absolute text-red-600 bottom-[-1.5rem] left-[0.5rem]">
          Invalid input
        </div>
      )}
    </div>
  );
};
