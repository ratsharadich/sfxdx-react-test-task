import { useStore } from "effector-react";
import { FC } from "react";

import { takeTokenDecorations } from "../../lib";
import { $maxAmountA } from "../../model";

/** Элемент смэтченного ордера */
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
    <div className="grid grid-cols-2 w-full h-3">
      <div className="grid grid-flow-col" style={{ gridTemplateColumns }}>
        <div
          className="flex items-center pl-1.25 rounded-0.5 overflow-x-scroll"
          style={{ backgroundColor }}
        >
          {amountA}
        </div>
        <div />
      </div>

      <div className="justify-self-center pl-2.5">
        {String(Number(amountB) / Number(amountA)).slice(0, 3)}
      </div>
    </div>
  );
};
