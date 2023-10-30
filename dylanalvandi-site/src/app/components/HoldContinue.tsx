import React, { useContext } from "react";

import { Progress } from "@nextui-org/react";
import { HomeContext } from "./HomeContext";

type Props = {};

export default function HoldContinue({}: Props) {
  const { timeHeldDown } = useContext(HomeContext);

  return (
    <>
      {timeHeldDown > 0 ? (
        <div className="w-[10rem] justify-center items-center flex flex-col">
            HOLD
          <Progress aria-label="Loading..." value={(timeHeldDown / 400) * 100} size="sm" radius="sm" color="primary"/>
        </div>
      ) : (
        <div>
            HOLD
        </div>
      )}
    </>
  );
}
