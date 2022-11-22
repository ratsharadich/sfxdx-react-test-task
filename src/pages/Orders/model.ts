import { createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";
import {
  $isLogin,
  $isNetworkCorrect,
  fetchAccountsFx,
  fetchTypeOfNetwork,
} from "src/entities";

export const OrdersPageGate = createGate();

/** Нажимаем кнопку Окей, что ознакомились с тем, что выбрана некорректная сеть */
export const acceptedIncorrectNetwork = createEvent();

/** Открыто ли модальное окно предупреждения о том, что выбрана неверная сеть */
export const $isNetworkModalOpened = createStore<boolean>(false);

$isNetworkModalOpened.on(acceptedIncorrectNetwork, () => false);

sample({
  clock: fetchTypeOfNetwork.done,
  source: [$isLogin, $isNetworkCorrect],
  fn: ([isLogin, isNetworkCorrect]) => {
    if (isLogin && !isNetworkCorrect) return true;
    return false;
  },
  target: $isNetworkModalOpened,
});

$isNetworkModalOpened.watch((net) => console.log("net", net));
$isNetworkCorrect.watch((corr) => console.log("corr", corr));

sample({
  clock: OrdersPageGate.open,
  filter: $isLogin,
  fn: () => undefined,
  target: fetchAccountsFx,
});

sample({
  clock: fetchAccountsFx.done,
  filter: $isLogin,
  fn: () => undefined,
  target: fetchTypeOfNetwork,
});
