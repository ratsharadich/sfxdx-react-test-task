import { createEffect } from 'effector';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');
const eth = web3.eth;

export const fetchAccountsFx = createEffect<undefined, string[]>(
  async () => {
    const accounts = await eth.requestAccounts();
    localStorage.setItem('accounts', JSON.stringify(accounts));
    return accounts;
  }
);
