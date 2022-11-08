import { FC } from "react";
import { BlockTitle } from "src/shared";

import { PLACE_THE_ORDER } from "../constants";

import { GridTile } from "./GridTile";
import { OrderForm } from "../../../features/OrderForm";
import { OrderTypeSelector } from "./OrderTypeSelector";
import { TransactionTypeSelector } from "./TransactionTypeSelector";

/** Раздел размещения заявки */
export const PlaceTheOrder: FC = () => {
  return (
    <GridTile className="gap-y-[2.5rem]" dataTestId="PlaceTheOrder">
      <div className="flex flex-wrap items-center gap-1.5">
        <BlockTitle text={PLACE_THE_ORDER} />
        <OrderTypeSelector />
      </div>

      <TransactionTypeSelector />

      <OrderForm />
    </GridTile>
  );
};
