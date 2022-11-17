export const setAccountToStorage = (accounts: string) => {
  localStorage.setItem('accounts', JSON.stringify(accounts));
}
