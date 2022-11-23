import { useGate } from "effector-react";
import { FC } from "react";
import { Modal } from "src/shared";

import { OrderDetailsModalProps } from "./interfaces";
import { OrderDetailsModalGate } from "./model";
import { Details, Sell } from "./ui";

export const OrderDetailsModal: FC<OrderDetailsModalProps> = ({ onCloseModal, ...props }) => {
  useGate(OrderDetailsModalGate);

  return (
    <Modal onOverlayClick={onCloseModal}>
      <div className="flex flex-col gap-1.5">
        <Details onCrossClick={onCloseModal} {...props} />
        <Sell />
      </div>
    </Modal>
  );
};
