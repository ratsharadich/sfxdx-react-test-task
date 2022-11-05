import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Logo } from "src/shared";
import { ConnectWallet } from "./constants";

/** Хедер страницы с лого и кнопкой подключения кошелька  */
export const Header: FC = () => {
  return (
    <header className="flex justify-center items-center pr-4.5 border-b border-g border-[#CDD2DD]">
      <Link to="/" className="mr-auto ml-[50vw] translate-x-[-50%]">
        <Logo />
      </Link>
      <Button active>{ConnectWallet}</Button>
    </header>
  );
};
