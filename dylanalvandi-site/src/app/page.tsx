"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import { NAVBAR_HEIGHT } from "./sizes";
import Home3dRender from "./components/Home3dRender";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ScreenWidth } from "./types";
import { useMediaQuery } from "react-responsive";
import HomeName from "./components/HomeName";
import {
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaReddit,
  FaRegEnvelope,
} from "react-icons/fa";

// Create a context to hold the home variables
export const HomeContext = createContext<any>(undefined);

// A component that sets the home variables
function HomeProvider({ children }: any) {
  const isMobile = useMediaQuery({ minWidth: "0px", maxWidth: "639px" });
  const isSm = useMediaQuery({ minWidth: "640px", maxWidth: "767px" });
  const isMd = useMediaQuery({ minWidth: "768px", maxWidth: "1023px" });
  const isLg = useMediaQuery({ minWidth: "1024px", maxWidth: "1279px" });
  const isXl = useMediaQuery({ minWidth: "1280px", maxWidth: "1535px" });
  const isXxl = useMediaQuery({ minWidth: "1536px" });

  useEffect(() => {
    if (isMobile) {
      setScreenWidth(ScreenWidth.MOBILE);
    } else if (isSm) {
      setScreenWidth(ScreenWidth.SM);
    } else if (isMd) {
      setScreenWidth(ScreenWidth.MD);
    } else if (isLg) {
      setScreenWidth(ScreenWidth.LG);
    } else if (isXl) {
      setScreenWidth(ScreenWidth.XL);
    } else if (isXxl) {
      setScreenWidth(ScreenWidth.XXL);
    } else {
      setScreenWidth(ScreenWidth.MOBILE);
    }
  }, [isSm, isMd, isLg, isXl, isXxl, isMobile]);

  const [screenWidth, setScreenWidth] = useState(ScreenWidth.MOBILE);

  return (
    <HomeContext.Provider value={{ screenWidth, setScreenWidth }}>
      {children}
    </HomeContext.Provider>
  );
}

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <HomeProvider>
      <main
        className={`relative`}
        style={{ height: `calc(100vh - ${NAVBAR_HEIGHT})` }}
      >
        <div
          id="name"
          className="absolute w-full h-full flex flex-col justify-center items-center text-5xl"
        >
          <HomeName hovered={hovered} setHovered={setHovered} />
          <div className="absolute bottom-28 z-[20] flex flex-col items-center justify-center">
            <div className="flex flex-row  gap-6 w-full justify-center">
              <Button className="text-2xl" isIconOnly variant="light">
                <FaGithub />
              </Button>
              <Button className="text-2xl" isIconOnly variant="light">
                <FaLinkedin />
              </Button>
              <Button className="text-2xl" isIconOnly variant="light">
                <FaRegEnvelope />
              </Button>
            </div>

            <div className="text-lg w-full flex flex-col items-center justify-center">
              <div>Was the cake really a lie?</div>
              <span className="text-sm text-neutral-500">Hold down on the thingy in the middle</span>
            </div>
          </div>
        </div>
        <div
          style={{ pointerEvents: "none" }}
          className={`absolute items-center font-bold justify-center z-[30] left-1/2 bottom-1/2 transition-all opacity ${
            hovered ? "opacity-100" : "opacity-0"
          } -translate-x-1/2`}
        >
          {
          <div>
          HOLD TO CONTINUE
          </div>
          }
        </div>
        <div
          id="3d-renderer-container"
          className="w-full h-screen absolute z-[5] select-none"
        >
          <Home3dRender hovered={hovered} setHovered={setHovered} />
        </div>
      </main>
    </HomeProvider>
  );
}
