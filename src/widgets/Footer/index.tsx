import { FC } from "react";
import { footerClassName } from "./constants";
import { Policies, Rights, SocialMedia } from "./ui";

/** Футер сайта с лого и ссылками на ресурсы  */
export const Footer: FC = () => {
  return (
    <footer className={footerClassName}>
      <Policies />
      <Rights />
      <SocialMedia />
    </footer>
  );
};
