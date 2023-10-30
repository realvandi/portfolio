import React, { useContext } from "react";
import { HomeContext } from "../page";
import { HOME_PAGE_NAME_DIRECTION_LIMIT } from "../types";
import { Button } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";

type Props = { hovered: any; setHovered: any };

export default function HomeName({ hovered, setHovered }: Props) {
  const { screenWidth, setScreenWidth, homePhase } = useContext(HomeContext)!;

  return (
    <>
      <div
        className={`z-[10] ${
          hovered ? ( screenWidth > HOME_PAGE_NAME_DIRECTION_LIMIT ? "-translate-x-[150%]" : "-translate-y-[400%] -translate-x-1/3") : "-translate-x-1/3"
        } opacity ${homePhase > 0 ? 'opacity-0' : 'opacity-100'} transition-all select-none font-bold`}
        style={{pointerEvents: 'none'}}
      >
        ALVANDI
      </div>
      <div
        className={`z-[0]  ${
          hovered ? ( screenWidth > HOME_PAGE_NAME_DIRECTION_LIMIT ? "translate-x-[200%]" : "translate-y-[400%] translate-x-1/2") : "translate-x-1/2"
        } opacity ${homePhase > 0 ? 'opacity-0' : 'opacity-100'} font-bold transition-all select-none`}
        style={{pointerEvents: 'none'}}
      >
        DYLAN
      </div>
    </>
  );
}
