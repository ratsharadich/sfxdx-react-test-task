import { FC } from "react";
import { Policies, Rights, SocialMedia } from "./ui";

/** Футер сайта с лого и ссылками на ресурсы  */
export const Footer: FC = () => {
  return (
    <footer
      className="grid grid-cols-[min-content,auto,min-content] justify-between items-start bg-[#F0F5F5] pt-[3.25rem] pb-[2.5rem] px-4.5 font-medium text-base text-[#676767] leading-[100%]"
      style={{ fontFamily: "Gilroy" }}
      /* TODO:Скачать и установить Gilroy  */
    >
      <Policies />
      <Rights />
      <SocialMedia />
    </footer>
  );
};
