import { useStore } from "effector-react";
import { FC, useState } from "react";
import { Spinner } from "src/shared";

import { ORDERS_PORTION, SEE_MORE, SELL } from "../../constants";
import { $isModalQueriesLoading, $matchedOrders } from "../../model";
import { ActionButtons } from "../ActionButtons";
import { MatchedOrdersBlock } from "../MatchedOrdersBlock";

export const Sell: FC = () => {
  const isLoading = useStore($isModalQueriesLoading);
  const matchedOrders = useStore($matchedOrders);

  const areMatchedOrders = Boolean(matchedOrders.length);

  const [showedOrders, setShowedOrders] = useState(ORDERS_PORTION);
  const displayedOrders = matchedOrders.slice(0, showedOrders);
  const areMoreOrdersFroDisplaying =
    areMatchedOrders && matchedOrders.length > displayedOrders.length;

  const handleSeeMoreLinkClick = () => {
    setShowedOrders((prev) => prev + ORDERS_PORTION);
  };

  const Orders: FC = () => (
    <>
      <MatchedOrdersBlock orders={displayedOrders} />

      {areMoreOrdersFroDisplaying && (
        <a onClick={handleSeeMoreLinkClick} className="cursor-pointer text-emerald-500">
          {SEE_MORE}
        </a>
      )}
    </>
  );

  return (
    <section className="flex flex-col gap-[1.5rem] justify-center items-center w-full">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <span className="font-namrope font-bold text-2xl w-full justify-start">
            {SELL}
          </span>

          {areMatchedOrders ? <Orders /> : "Нема ничего"}

          <ActionButtons areOrders={areMatchedOrders} isloading={isLoading} />
        </>
      )}
    </section>
  );
};
