import cn from "classnames";
import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { ROOT_ID } from "src/constants";

/** Обёртка модального окна */
export const Modal: FC<{
  onOverlayClick?: () => void;
  contentClassName?: string;
  children: ReactNode;
}> = ({ onOverlayClick, contentClassName, children }) => {
  return createPortal(
    <article className="fixed w-screen h-screen z-20 flex justify-center items-center">
      <section
        className={cn(
          "bg-white max-h-[85vh] w-[24.75rem] p-[1.75rem] rounded-[0.5rem] z-30 overflow-y-scroll",
          contentClassName
        )}
      >
        {children}
      </section>

      <div
        className="absolute top-0 w-full h-full bg-overlay-gray opacity-30 cursor-pointer"
        onClick={onOverlayClick}
      />
    </article>,
    document.getElementById(ROOT_ID) as HTMLElement
  );
};
