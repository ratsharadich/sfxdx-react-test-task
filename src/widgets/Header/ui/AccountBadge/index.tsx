import { FC } from "react";
import { CopyLinkIcon, MetamaskIcon } from "src/shared";

import { AccountBadgeClassName } from "./constants";

/** Бейдж аккаунта авторизованного пользователя */
export const AccountBadge: FC<{ id: string }> = ({ id }) => {
/**  Копируем ключ в буфер обмена */
  const handleBadgeClick = () => {
    navigator.clipboard.writeText(id);
  }

  return (
    <div
      className={AccountBadgeClassName}
      onClick={handleBadgeClick}
    >
      <MetamaskIcon />
      <div className="truncate">{id}</div>
      <CopyLinkIcon />
    </div>
  );
};
