import { FC } from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from "src/shared";

/** Блок футера с ссылками на социальные сети */
export const SocialMedia: FC = () => {
  return (
    <section className="flex gap-2 md:justify-self-end max-md:justify-self-center md:order-3 max-md:order-3">
      <Link to="/">
        <FacebookIcon />
      </Link>

      <Link to="/">
        <TwitterIcon />
      </Link>

      <Link to="/">
        <YouTubeIcon />
      </Link>

      <Link to="/">
        <InstagramIcon />
      </Link>
    </section>
  );
};
