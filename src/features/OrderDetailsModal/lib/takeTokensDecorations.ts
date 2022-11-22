/** Генерирует шаблон колонок {gridTemplateColumns} и задний фон
 * для плашки смэтченного ордера {backgroundColor}
 */
export const takeTokenDecorations = (amountA: string, maxAmountA: number) => {
  /** 100% всего элемента */
  const entireGridFragments = 100;

  /** процент текущего amountA от максимального amountA по массиву */
  const amountARatio = Math.ceil((Number(amountA) / maxAmountA) * 100);

  /** остаточное белое пространство элемента */
  const restFragments = entireGridFragments - amountARatio;

  /** пространство, занимаемое количеством токенов */
  const amountAFragments = amountARatio < 50 ? 50 : amountARatio;

  /** прозрачность плашки */
  const opacity = amountARatio === 100 ? "1" : `.${amountARatio}`;

  /** цвет фона элемента */
  const backgroundColor = ` rgb(178,241,222,${opacity})`;

  return {
    gridTemplateColumns: `${amountAFragments}fr ${restFragments}fr`,
    backgroundColor,
  };
};
