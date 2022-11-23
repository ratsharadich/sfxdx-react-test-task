import { FC, useEffect, useRef, useState } from "react";

import { inputClassName, INVALID_WARNING } from "./constants";
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
    if (inputValidity) {
      setInputValid(true);
      return;
    }

    setInputValid(false);
  }, [inputValidity]);

  return (
    <div className="relative h-2.75">
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
        <div className="absolute text-red-600 bottom-minus1.5 left-0.5">
          {INVALID_WARNING}
        </div>
      )}
    </div>
  );
};
