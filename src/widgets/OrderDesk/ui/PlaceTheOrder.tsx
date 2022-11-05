import { FC } from "react";
import { BlockTitle } from "src/shared";
import { GridTile } from "./GridTile";

/** Раздел размещения заявки */
export const PlaceTheOrder: FC = () => {
  return (
    <GridTile dataTestId="PlaceTheOrder">
      <BlockTitle text="Place the Order" />
    </GridTile>
  );
};
