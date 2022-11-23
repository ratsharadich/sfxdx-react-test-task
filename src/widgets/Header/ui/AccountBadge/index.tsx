import { FC } from "react";
import { CopyLinkIcon, MetamaskIcon } from "src/shared";

import { AccountBadgeProps } from "../../interfaces";
import { AccountBadgeClassName } from "./constants";

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
