import React, { useContext } from "react";
import { HomeContext } from "../page";
import { HOME_PAGE_NAME_DIRECTION_LIMIT } from "../types";

type Props = { hovered: any; setHovered: any };

export default function HomeName({ hovered, setHovered }: Props) {
  const { screenWidth, setScreenWidth } = useContext(HomeContext)!;

  return (
    <>
      <div
        className={`z-[10] ${
          hovered ? ( screenWidth > HOME_PAGE_NAME_DIRECTION_LIMIT ? "-translate-x-[200%]" : "-translate-y-[400%] -translate-x-1/2") : "-translate-x-1/2"
        } transition-all select-none font-bold`}
      >
        DYLAN
      </div>
      <div
        className={`z-[0]  ${
          hovered ? ( screenWidth > HOME_PAGE_NAME_DIRECTION_LIMIT ? "translate-x-[150%]" : "translate-y-[400%] translate-x-1/3") : "translate-x-1/3"
        } font-bold transition-all select-none`}
      >
        ALVANDI
      </div>
    </>
  );
}
