import cn from "classnames";
import { useStore } from "effector-react";
import { FC } from "react";
import { $isMarket } from "src/features/OrderForm/model";
import { CrossIcon } from "src/shared";

import {
  ASSET_AMOUNT_TITLE,
  ETH,
  EXPECTED_PRICE_TITLE,
  ORDER_DETAILS,
  ORDER_SIDE_TITLE,
  ORDER_TYPE_TITLE,
  TRADING_PAIR_TITLE,
  USDT,
} from "../../constants";
import { DetailsProps, ListItemProps } from "../interfaces";

/** Информация по ордеру */
export const Details: FC<DetailsProps> = ({
  onCrossClick,
  orderType,
  orderSide,
  assetAmount,
  expectedOrderPrice,
}) => {
  const ListIem: FC<ListItemProps> = ({ title, value, currency, className }) => (
    <li
      className={cn(
        "flex justify-between pt-[0.5rem] border-b border-border-gray",
        className
      )}
    >
      <h2 className="font-manrope font-medium text-base">{title}</h2>

      <div className="flex gap-[0.25rem] font-manrope font-semibold text-base">
        <span>{value}</span>
        <span className="text-disabled-text-gray">{currency}</span>
      </div>
    </li>
  );

  const isMarket = useStore($isMarket);

  return (
    <section className="flex flex-col gap-y-[1.5rem]">
      <div className="flex justify-between items-center">
        <span className="font-namrope font-bold text-2xl">{ORDER_DETAILS}</span>
        <CrossIcon className="cursor-pointer" onClick={onCrossClick} />
      </div>

      <ul>
        <ListIem title={TRADING_PAIR_TITLE} value={`${ETH}/${USDT}`} />
        <ListIem title={ORDER_TYPE_TITLE} value={orderType} />
        <ListIem title={ORDER_SIDE_TITLE} value={orderSide} />
        <ListIem
          title={ASSET_AMOUNT_TITLE}
          value={assetAmount}
          currency={ETH}
        />
        <ListIem
          title={EXPECTED_PRICE_TITLE}
          value={expectedOrderPrice}
          currency={USDT}
          className={cn({ invisible: isMarket })}
        />
      </ul>
    </section>
  );
};
