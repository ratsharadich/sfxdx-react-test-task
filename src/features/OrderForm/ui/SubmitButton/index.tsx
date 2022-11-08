import { FC } from "react";
import { Button } from "src/shared";
import { PLACE_THE_ORDER_BUTTON } from "../../constants";

/** submit формы размещения orders */
export const SubmitButton: FC<{
  active?: boolean;
  onClick: (e: React.MouseEvent) => void;
}> = ({ active, onClick }) => {
  return (
    <Button submit onClick={onClick} active={active}>
      {PLACE_THE_ORDER_BUTTON}
    </Button>
  );
};
