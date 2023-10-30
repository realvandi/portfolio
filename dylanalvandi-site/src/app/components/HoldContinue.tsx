import React, { useContext } from "react";
import { HomeContext } from "../page";
import { Progress } from "@nextui-org/react";

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
