export interface InputsBlockProps {
  /** Устновлен ли рыночный тип сделки */
  isMarket: boolean;

  /** Токен А */
  tokenA: string;

  /** Токен B */
  tokenB: string;

  /** Количество установленных токенов */
  tokenAmount: string;

  /** Ограничение за токен */
  priceLimit: string;
}

export interface OutputProps {
  /** Ссылка на Output элемент */
  innerRef: React.Ref<HTMLOutputElement>;
}
