import { GetMatchingOrdersFnArgs } from "src/shared";

export type MatchOrdersFnArgs = GetMatchingOrdersFnArgs & {
  orderIds: string[];
  account: string;
};

export type CreateOrderFnArgs = Omit<
  MatchOrdersFnArgs,
  "orderIds" | "isMarket"
>;

export interface GridTileProps {
  /** Дочерний элемент */
  children: React.ReactNode;

  /** Стили */
  className?: string;

  /** id для тестирования */
  dataTestId?: string;
}
