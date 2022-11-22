import { FC } from "react";
import { Button, CrossIcon, Modal } from "src/shared";

import { BUTTON, MESSAGE, TITLE } from "./constants";

/** Модально окно, появляющееся, если выбрана некорректная сеть */
export const NetworkWarningModal: FC<{
  onCloseClick: () => void;
}> = ({ onCloseClick }) => {
  return (
    <Modal contentClassName="flex flex-col items-center gap-[1.5rem] !w-[30rem]">
      <div className="flex justify-between w-full">
        <h2 className="font-gilroy font-bold text-2xl">{TITLE}</h2>
        <CrossIcon className="cursor-pointer" onClick={onCloseClick} />
      </div>

      <span>{MESSAGE}</span>

      <Button className="!w-full" onClick={onCloseClick} active>
        {BUTTON}
      </Button>
    </Modal>
  );
};
