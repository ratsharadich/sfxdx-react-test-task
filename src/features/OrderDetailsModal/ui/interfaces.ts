export interface ActionButtonProps {
  /** Присутствуют ли смэтченные ордеры */
  areOrders: boolean;

  /** Загружаются ли сметченные ордеры или их id */
  isloading: boolean;
}

export interface DetailsProps {
  /** Событие по нажатию на закрывающий крест модальеного окна */
  onCrossClick: () => void;

  /** Тип ордера Limit/Market */
  orderType: string;

  /** Сторона ордера Buy/Sell */
  orderSide: string;

  /** Установленное количество токенов А */
  assetAmount: string;

  /** Ожидаемая цена сделки */
  expectedOrderPrice: string;
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
