import { FC } from "react";
import { CopyLinkIcon, MetamaskIcon } from "src/shared";

import { AccountBadgeClassName } from "../constants";
import { AccountBadgeProps } from "../interfaces";

/** Бейдж аккаунта авторизованного пользователя */
export const AccountBadge: FC<AccountBadgeProps> = ({ id }) => {
  /**  Копируем ключ в буфер обмена */
  const handleBadgeClick = () => {
    navigator.clipboard.writeText(id);
  };

  return (
    <div className={AccountBadgeClassName} onClick={handleBadgeClick}>
      <MetamaskIcon />

      <div className="truncate">{id}</div>

      <CopyLinkIcon />
    </div>
  );
};
