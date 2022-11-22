import { useGate } from "effector-react";
import { FC } from "react";
import { Modal } from "src/shared";

import { OrderDetailsModalGate } from "../../model";
import { Details } from "../Details";
import { Sell } from "../Sell";

export const DetailsModal: FC<{
  onCloseModal: () => void
  orderType: string
  orderSide: string
  assetAmount: string
  expectedOrderPrice: string
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
