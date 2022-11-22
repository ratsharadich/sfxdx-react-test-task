export const ACCOUNTS_FROM_STORAGE = JSON.parse(
  localStorage.getItem("accounts") ?? "[]"
);

export const TARGET_NETWORK_TYPE = 'goerli';
