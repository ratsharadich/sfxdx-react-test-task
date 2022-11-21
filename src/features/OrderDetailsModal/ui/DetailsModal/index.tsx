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
  isLoading: boolean
}> = ({ onCloseModal, isLoading, ...props }) => {
  useGate(OrderDetailsModalGate);

  return (
    <Modal onOverlayClick={onCloseModal}>
      <div className="flex flex-col gap-[0.5rem]">
        <Details onCrossClick={onCloseModal} {...props} />

        <Sell isLoading={isLoading} />
      </div>
    </Modal>
  );
};
