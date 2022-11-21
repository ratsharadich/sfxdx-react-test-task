import { FC, ReactNode } from "react";

/** Обёртка модального окна */
export const Modal: FC<{ onOverlayClick: () => void; children: ReactNode }> = ({
  onOverlayClick,
  children,
}) => {
  return (
    <div className="fixed w-screen h-screen z-10 flex justify-center items-center">
      <section className="bg-white w-[24.75rem] p-[1.75rem] rounded-[0.5rem] z-20">{children}</section>

      <div
        className="absolute top-0 w-full h-full bg-overlay-gray opacity-30 cursor-pointer"
        onClick={onOverlayClick}
      />
    </div>
  );
};
