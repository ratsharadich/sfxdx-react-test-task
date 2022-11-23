export interface ActionButtonProps {
  /** Присутствуют ли смэтченные ордеры */
  areOrders: boolean;

  /** Загружаются ли сметченные ордеры или их id */
  isloading: boolean;
}

export interface ListItemProps {
  /** Заголовок элемента деталей ордера */
  title: string;

  /** Значение элемента деталей ордера */
  value: string;

  /** Валюта, которая добавляется к значению */
  currency?: string;

  /** Стили */
  className?: string;
}

export interface MatchedOrdersBlockProps {
  /** Сметченные ордеры */
  orders: Array<Record<string, string>>;
}

export interface OrderDetailsModalProps {
  /** Событие по закрытию моадального окна */
  onCloseModal: () => void;

  /** Тип оредар Limit/Market */
  orderType: string;

  /** Сторона ордера Buy/Sell */
  orderSide: string;

  /** Установленное количество токенов */
  assetAmount: string;

  /** Ожидаемая цена сделки */
  expectedOrderPrice: string;
}

export interface DetailsProps
  extends Omit<OrderDetailsModalProps, "onCloseModal"> {
  /** Событие по нажатию на закрывающий крест модальеного окна */
  onCrossClick: () => void;
}
