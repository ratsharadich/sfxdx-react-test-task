import { useEvent, useStore } from "effector-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { $accounts, $isLoading, requestedAccounts } from "src/entities";
import { Button, Logo } from "src/shared";

import { CONNECT_WALLET } from "./constants";
import { AccountBadge } from "./ui";

/** Хедер страницы с лого и кнопкой подключения кошелька  */
export const Header: FC = () => {
  const [account] = useStore($accounts);
  const isLoading = useStore($isLoading);
  const requestedAccountsEvent = useEvent(requestedAccounts);

  return (
    <header className="flex md:justify-center max-md:justify-between items-center pr-4.5 py-1.5 max-md:px-[1.25rem] border-b border-g border-[#CDD2DD]">
      <Link to="/" className="md:mr-auto md:ml-[50vw] md:translate-x-[-50%]">
        <Logo />
      </Link>

      {isLoading ? (
        "Загрузка"
      ) : (
        <>
          {account ? (
            <AccountBadge id={account} />
          ) : (
            <Button active onClick={requestedAccountsEvent}>
              {CONNECT_WALLET}
            </Button>
          )}
        </>
      )}
    </header>
  );
};
