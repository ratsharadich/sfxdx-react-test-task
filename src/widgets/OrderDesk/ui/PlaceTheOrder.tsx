import { FC } from "react";
import { BlockTitle } from "src/shared";
import { PLACE_THE_HOLDER } from "../constants";
import { GridTile } from "./GridTile";
import { OrderTypeSelector } from "./OrderTypeSelector";
import { TransactionTypeSelector } from "./TransactionTypeSelector";

/** Раздел размещения заявки */
export const PlaceTheOrder: FC = () => {
  return (
    <GridTile className="gap-y-[2.5rem]" dataTestId="PlaceTheOrder">
      <div className="flex items-center gap-1.5">
        <BlockTitle text={PLACE_THE_HOLDER} />
        <OrderTypeSelector />
      </div>

      <TransactionTypeSelector />
    </GridTile>
  );
};
