import { FC } from "react";
import { Link } from "react-router-dom";
import { Logo } from "src/shared";
import { RESERVED_RIGHTS } from "../../constants";

/** Блок футера с лого и @ all rights reserved */
export const Rights: FC = () => {
  return (
    <section className="flex flex-col h-full justify-between items-center pt-2">
      <Link to="/">
        <Logo />
      </Link>

      <span>{RESERVED_RIGHTS}</span>
    </section>
  );
};
