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
          hovered ? ( screenWidth > HOME_PAGE_NAME_DIRECTION_LIMIT ? "-translate-x-[200%]" : "-translate-y-[500%] -translate-x-1/2") : "-translate-x-1/2"
        } transition-all`}
      >
        DYLAN
      </div>
      <div
        className={`z-[0]  ${
          hovered ? ( screenWidth > HOME_PAGE_NAME_DIRECTION_LIMIT ? "translate-x-[150%]" : "translate-y-[450%] translate-x-1/2") : "translate-x-1/2"
        } font-bold transition-all`}
      >
        ALVANDI
      </div>
    </>
  );
}
