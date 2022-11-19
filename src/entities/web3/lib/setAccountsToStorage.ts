export const setAccountsToStorage = (accounts: string[]) => {
  localStorage.setItem("accounts", JSON.stringify(accounts));
};
