import { useEvent, useStore } from "effector-react";
import { FC } from "react";
import { $accounts, requestedAccounts } from "src/entities";
import { Button, Logo } from "src/shared";

import { CONNECT_WALLET_BUTTON, headerClassName } from "./constants";
import { AccountBadge } from "./ui";

/** Хедер страницы с лого и кнопкой подключения кошелька  */
export const Header: FC = () => {
  const [account] = useStore($accounts);
  const requestedAccountsEvent = useEvent(requestedAccounts);

  return (
    <header className={headerClassName}>
      <a href="/" className="md:mr-auto md:ml-half-screen-with md:translate-x-minus50%">
        <Logo />
      </a>

      <>
        {account ? (
          <AccountBadge id={account} />
        ) : (
          <Button active onClick={requestedAccountsEvent}>
            {CONNECT_WALLET_BUTTON}
          </Button>
        )}
      </>
    </header>
  );
};
