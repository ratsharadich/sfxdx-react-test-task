import { FC } from "react";
import { Link } from "react-router-dom";
import {
  COOKIE_POLICY,
  PRIVACY_POLICY,
  TERMS_AND_CONDITIONS,
} from "../../constants";

/** Блок футера с ссылками на политики */
export const Policies: FC = () => {
  return (
    <section className="flex flex-col gap-1 max-md:justify-self-center max-md:items-center whitespace-pre md:order-1 max-md:order-2">
      <Link to="/">{PRIVACY_POLICY}</Link>
      <Link to="/">{TERMS_AND_CONDITIONS}</Link>
      <Link to="/">{COOKIE_POLICY}</Link>
    </section>
  );
};