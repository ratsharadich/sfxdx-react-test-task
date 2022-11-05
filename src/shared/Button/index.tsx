import React, { FC } from "react";
import { buttonClassName } from "./constants";
import './styles.css';

/** Переиспользуемая кнопка */
export const Button: FC<{ children?: React.ReactNode; active?: Boolean }> = ({ children, active }) => {
  return (
    <button className={buttonClassName(active)}>
      {children}
    </button>
  );
};
