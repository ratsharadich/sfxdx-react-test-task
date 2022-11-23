import "./styles.css";

import { FC } from "react";

import { buttonClassName } from "./constants";
import { ButtonProps } from "./interfaces";

/** Стилизованная кнопка */
export const Button: FC<ButtonProps> = ({
  children,
  active,
  className,
  onClick,
  type = "button",
}) => {
  return (
    <button
      className={buttonClassName(active, className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
