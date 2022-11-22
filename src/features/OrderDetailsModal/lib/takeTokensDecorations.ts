/** Генерирует шаблон колонок {gridTemplateColumns} и задний фон
 * для плашки смэтченного ордера {backgroundColor}
 */
export const takeTokenDecorations = (amountA: string, maxAmountA: number) => {
  /** 100% всего элемента */
  const entireGridFragments = 100;

  /** процент текущего amountA от максимального amountA по массиву */
  const amountARation = Math.ceil((Number(amountA) / maxAmountA) * 100);

  /** остаточное белое пространство элемента */
  const restFragments = entireGridFragments - amountARation;

  /** пространство, занимаемое количеством токенов */
  const amountAFragments = amountARation < 50 ? 50 : amountARation;

  /** прозрачность плашки */
  const opacity = amountARation === 100 ? "1" : `.${amountARation}`;

  /** цвет фона элемента */
  const backgroundColor = ` rgb(178,241,222,${opacity})`;

  return {
    gridTemplateColumns: `${amountAFragments}fr ${restFragments}fr`,
    backgroundColor,
  };
};
