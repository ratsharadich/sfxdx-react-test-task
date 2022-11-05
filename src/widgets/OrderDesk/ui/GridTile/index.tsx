import React, { FC } from "react";
import { gridTileClassName } from "./constants";

/** Обёртка плитки grid'a */
export const GridTile: FC<{
  children: React.ReactNode;
  className?: string;
  dataTestId?: string;
}> = ({ children, className, dataTestId }) => {
  return (
    <article className={gridTileClassName(className)} data-testid={dataTestId}>
      {children}
    </article>
  );
};
