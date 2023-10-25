"use client"

import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";

type Props = {};

export default function AlvandiInteractiveTest({}: Props) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-row gap-3 items-center justify-center">
      {counter}
      <Button isIconOnly onClick={()=>{setCounter(counter + 1)}}>
        <FaBeer />
      </Button>
    </div>
  );
}
