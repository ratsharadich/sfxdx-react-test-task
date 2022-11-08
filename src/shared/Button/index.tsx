import React, { FC } from "react";
import { buttonClassName } from "./constants";
import "./styles.css";

/** Переиспользуемая кнопка */
export const Button: FC<{
  children?: React.ReactNode;
  active?: Boolean;
  className?: string;
  onClick?: () => void;
}> = ({ children, active, className, onClick }) => {
  return (
    <button className={buttonClassName(active, className)} onClick={onClick}>
      {children}
    </button>
  );
};
