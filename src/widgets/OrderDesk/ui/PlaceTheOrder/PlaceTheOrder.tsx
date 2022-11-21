import "./styles.css";

import { useEvent, useStore } from "effector-react";
import { FC } from "react";
import {
  $expectedOrderPrice,
  $isModalOpened,
  $tokenAmount,
  OrderDetailsModal,
  OrderForm,
  setModalStatus,
} from "src/features";
import { BlockTitle } from "src/shared";

import { PLACE_THE_ORDER } from "../../constants";
import { $orderSide, $orderType } from "../../model";
import { GridTile } from "../GridTile";
import { OrderTypeSelector } from "../OrderTypeSelector";
import { TransactionTypeSelector } from "../TransactionTypeSelector";

/** Раздел размещения заявки */
export const PlaceTheOrder: FC = () => {
  const isModalOpened = useStore($isModalOpened);
  const setModalStatusEvent = useEvent(setModalStatus);
  const handleCloseModal = () => setModalStatusEvent(false);

  const orderType = useStore($orderType);
  const orderSide = useStore($orderSide);
  const assetAmount = useStore($tokenAmount);
  const expectedOrderPrice = String(useStore($expectedOrderPrice));

  return (
    <GridTile
      className="gap-y-[2.5rem] relative svg-pattern"
      dataTestId="PlaceTheOrder"
    >
      <div className="flex flex-wrap items-center gap-1.5">
        <BlockTitle text={PLACE_THE_ORDER} />
        <OrderTypeSelector />
      </div>

      <TransactionTypeSelector />

      <OrderForm />

      {isModalOpened && (
        <OrderDetailsModal
          onCloseModal={handleCloseModal}
          orderType={orderType}
          orderSide={orderSide}
          assetAmount={assetAmount}
          expectedOrderPrice={expectedOrderPrice}
        />
      )}
    </GridTile>
  );
};
