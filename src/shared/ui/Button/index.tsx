import "./styles.css";

import React, { FC } from "react";

import { buttonClassName } from "./constants";

/** Стилизованная кнопка */
export const Button: FC<{
  children?: React.ReactNode;
  active?: Boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "submit" | "reset" | "button";
}> = ({ children, active, className, onClick, type = "button" }) => {
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
