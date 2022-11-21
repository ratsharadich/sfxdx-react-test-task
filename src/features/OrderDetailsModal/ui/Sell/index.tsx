import { FC } from "react";
import { Spinner } from "src/shared";

export const Sell: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <section className="flex justify-center items-center w-full">
      {isLoading && <Spinner />}
    </section>
  );
};
