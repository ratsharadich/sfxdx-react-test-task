export interface ButtonProps {
  /** Дочерний элемент кнопки */
  children?: React.ReactNode;

  /** Активна ли кнопка */
  active?: Boolean;

  /** Стили */
  className?: string;

  /** Действие по нажатии на кнопку */
  onClick?: (e: React.MouseEvent) => void;

  /** Тип кнопки */
  type?: "submit" | "reset" | "button";
}
