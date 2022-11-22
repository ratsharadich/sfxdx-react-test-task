import { FC, ReactNode } from "react";

/** Обёртка модального окна */
export const Modal: FC<{ onOverlayClick: () => void; children: ReactNode }> = ({
  onOverlayClick,
  children,
}) => {
  return (
    <article className="fixed w-screen h-screen z-10 flex justify-center items-center">
      <section className="bg-white max-h-[85vh] w-[24.75rem] p-[1.75rem] rounded-[0.5rem] z-20 overflow-y-scroll">
        {children}
      </section>

      <div
        className="absolute top-0 w-full h-full bg-overlay-gray opacity-30 cursor-pointer"
        onClick={onOverlayClick}
      />
    </article>
  );
};
