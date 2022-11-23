import { FC } from "react";

import { NO_MATCHES } from "../constants";

/** Заглушка, когда не найдены смэтченные ордеры */
export const NotFound: FC = () => {
  return (
    <pre className="font-manrope font-bold text-2xl text-center">
      {NO_MATCHES}
    </pre>
  );
};
