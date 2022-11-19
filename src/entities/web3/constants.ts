export const ACCOUNTS_FROM_STORAGE = JSON.parse(
  localStorage.getItem("accounts") ?? "[]"
);
