import { createEffect } from "effector";
import Web3 from "web3";

import { setAccountToStorage } from "../lib";

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const eth = web3.eth;

export const fetchAccountFx = createEffect<undefined, string>(async () => {
  const [account] = await eth.requestAccounts();
  setAccountToStorage(account);
  return account;
});
