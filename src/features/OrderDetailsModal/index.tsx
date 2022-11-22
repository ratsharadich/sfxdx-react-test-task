import { FC } from "react";
import { createPortal } from "react-dom";
import { ROOT_ID } from "src/constants";

import { DetailsModal } from "./ui";

export const OrderDetailsModal: FC<{
  onCloseModal: () => void;
  orderType: string;
  orderSide: string;
  assetAmount: string;
  expectedOrderPrice: string;
}> = (props) =>
  createPortal(
    <DetailsModal {...props} />,
    document.getElementById(ROOT_ID) as HTMLElement
  );
