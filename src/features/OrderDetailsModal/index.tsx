import { FC } from "react";
import { createPortal } from "react-dom";
import { ROOT_ID } from "src/constants";
import { Modal } from "src/shared";

import { Details } from "./ui";

export const OrderDetailsModal: FC<{
  onCloseModal: () => void;
  orderType: string;
  orderSide: string;
  assetAmount: string;
  expectedOrderPrice: string;
}> = ({
  onCloseModal,
  orderType,
  orderSide,
  assetAmount,
  expectedOrderPrice,
}) =>
  createPortal(
    <Modal onOverlayClick={onCloseModal}>
      <Details
        onCrossClick={onCloseModal}
        orderType={orderType}
        orderSide={orderSide}
        assetAmount={assetAmount}
        expectedOrderPrice={expectedOrderPrice}
      />
    </Modal>,
    document.getElementById(ROOT_ID) as HTMLElement
  );
