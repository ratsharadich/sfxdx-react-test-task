import { useEvent, useGate, useStore } from "effector-react";
import { FC } from "react";
import { NetworkWarningModal } from "src/features";
import { Background } from "src/shared";
import { Footer, Header, OrderDesk } from "src/widgets";

import {
  $isNetworkModalOpened,
  acceptedIncorrectNetwork,
  OrdersPageGate,
} from "./model";

/** Страница совершения сделок */
export const Orders: FC = () => {
  useGate(OrdersPageGate);

  const isNetworkModalOpened = useStore($isNetworkModalOpened);
  const acceptedIncorrectNetworkEvent = useEvent(acceptedIncorrectNetwork);

  const handleCloseModal = () => {
    acceptedIncorrectNetworkEvent();
  };

  return (
    <>
      <div className="grid grid-rows-content w-screen h-screen absolute z-10">
        <Header />

        <main>
          <OrderDesk />
        </main>

        <Footer />
      </div>

      <Background />

      {isNetworkModalOpened && (
        <NetworkWarningModal onCloseClick={handleCloseModal} />
      )}
    </>
  );
};
