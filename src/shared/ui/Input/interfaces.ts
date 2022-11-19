export interface InputProps {
  /** id input'a для тэга label */
  id?: string;

  /** Текст в label input'a */
  label?: string;

  /** Тип input'a */
  type?: string;

  /** регулярное выражение,
   * под которое должно подходить значение input'a
   */
  pattern?: string;

  /** Заблокирован или нет input */
  disabled?: boolean;

  /** Подсказывающий текст input */
  placeholder?: string;

  /** Значение в input */
  value?: string;

  /** Слушатель события изменения input */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** Ссылка на элемент input */
  ref?: React.Ref<HTMLInputElement>;

  /** Класс */
  className?: string;
}
