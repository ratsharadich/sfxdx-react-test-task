import Web3 from "web3";

import { ABI, CONTRACT_ADRESS } from "./constants";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Contract = require("web3-eth-contract");

export const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
export const eth = web3.eth;

Contract.setProvider(web3.givenProvider);
export const contract = new Contract(ABI, CONTRACT_ADRESS);
export const contractMethods = contract.methods;

console.log(contract, "contract");
console.log(contractMethods, "contractMethods");
console.log(eth, "eth");
