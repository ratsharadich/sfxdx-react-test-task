import { FC } from "react";
import { BlockTitle } from "src/shared";
import { PLACE_THE_HOLDER } from "../constants";
import { GridTile } from "./GridTile";

/** Раздел размещения заявки */
export const PlaceTheOrder: FC = () => {
  return (
    <GridTile dataTestId="PlaceTheOrder">
      <BlockTitle text={PLACE_THE_HOLDER} />
    </GridTile>
  );
};
