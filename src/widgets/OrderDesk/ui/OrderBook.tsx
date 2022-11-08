import { FC } from "react";
import { BlockTitle } from "src/shared";
import { GridTile } from "./GridTile";
import { ORDER_BOOK } from "../constants";

/** Раздел зарегистрированных ордеров в виде биржевого стакана  */
export const OrderBook: FC = () => {
  const contentMock = false;

  return (
    <GridTile
      className="row-span-2 md:order-2 max-md:order-3"
      dataTestId="OrderBook"
    >
      <BlockTitle text={ORDER_BOOK} />

      <div>
        {contentMock ? (
          <></>
        ) : (
          <pre className="font-manrope text-gray text-xl pt-2.5">
            {`Choose tokens
to see prices`}
          </pre>
        )}
      </div>
    </GridTile>
  );
};
