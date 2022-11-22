import { useGate } from "effector-react";
import { FC } from "react";
import { Modal } from "src/shared";

import { OrderDetailsModalGate } from "./model";
import { Details, Sell } from "./ui";

export const OrderDetailsModal: FC<{
  onCloseModal: () => void;
  orderType: string;
  orderSide: string;
  assetAmount: string;
  expectedOrderPrice: string;
}> = ({ onCloseModal, ...props }) => {
  useGate(OrderDetailsModalGate);

  return (
    <Modal onOverlayClick={onCloseModal}>
      <div className="flex flex-col gap-[1.5rem]">
        <Details onCrossClick={onCloseModal} {...props} />
        <Sell />
      </div>
    </Modal>
  );
};
