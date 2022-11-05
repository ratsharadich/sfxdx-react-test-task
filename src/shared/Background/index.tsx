import React, { FC } from "react";
import { ElipsesClassNames } from "./constants";

export const Background: FC = () => {
  const { leftTop, leftBottom, rightTop, rightBottom } = ElipsesClassNames;
  return (
    <div className="relative h-screen w-screen overflow-hidden z-0" data-testid="Background">
      <div className={leftTop} data-testid="Background.LeftTopEllips" />
      <div className={leftBottom} data-testid="Background.LeftBottomEllips" />
      <div className={rightTop} data-testid="Background.RightTopEllips" />
      <div className={rightBottom} data-testid="Background.RightBottomEllips" />
    </div>
  );
};
