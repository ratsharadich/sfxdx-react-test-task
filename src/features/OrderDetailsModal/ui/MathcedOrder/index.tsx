import { useStore } from "effector-react";
import { FC } from "react";

import { takeTokenDecorations } from "../../lib";
import { $maxAmountA } from "../../model";

export const MatchedOrder: FC<{ amountA: string; amountB: string }> = ({
  amountA,
  amountB,
}) => {
  const averageAmountA = useStore($maxAmountA);

  const { gridTemplateColumns, backgroundColor } = takeTokenDecorations(
    amountA,
    averageAmountA
  );

  return (
    <div className="grid grid-cols-2 w-full h-[3rem]">
      <div className="grid grid-flow-col" style={{ gridTemplateColumns }}>
        <div
          className="flex items-center pl-[1.25rem] rounded-[0.5rem] overflow-x-scroll"
          style={{ backgroundColor }}
        >
          {amountA}
        </div>
        <div />
      </div>

      <div className="justify-self-center pl-[2.5rem]">
        {Number(amountA) * Number(amountB)}
      </div>
    </div>
  );
};
