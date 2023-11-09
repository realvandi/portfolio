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
import HoldContinue from "./components/HoldContinue";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import HomeText from "./components/HomeText";
import { HomeContext, HomeProvider } from "./components/HomeContext";

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const { homePhase } = useContext(HomeContext)!;

  const BACKGROUND_TEXTS = [
    "WEB DEV",
    "DEVELOPMENT",
    "CODER",
    "PROGRAM",
    "DESIGN",
    "UI/UX",
    "GAME DEV",
    "JAKARTA",
    "INDONESIA",
    "LOGIC",
    "FRONT END",
    "BACK END",
    "DOCUMENTATION",
    "APP DEV"
  ];

  useEffect(() => {
    const textContainer = document.getElementById("text-container");

    if (textContainer) {
      const textDivs = textContainer.querySelectorAll("div");
      const numTextDivs = textDivs.length;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Calculate the horizontal and vertical spacing between text divs
      const horizontalSpacing = screenWidth / (numTextDivs + 1);
      const verticalSpacing = screenHeight / (numTextDivs + 1);

      textDivs.forEach((textDiv, index) => {
        // Calculate the position for each text div
        const xPos = (index + 1) * horizontalSpacing;
        const yPos = (index + 1) * verticalSpacing;

        const htmlElement = textDiv as HTMLElement;
        htmlElement.style.left = `${xPos}px`;
        htmlElement.style.top = `${yPos}px`;
      });
    }
  }, []);

  return (
    <HomeProvider>
      <main className={`relative`} style={{ height: `100vh` }}>
        <div id="text-container" className={`overflow-hidden absolute w-full h-full text-5xl transition-all ${ (homePhase > 0) ? 'opacity-0' : 'opacity-10'}`}>
          {BACKGROUND_TEXTS.map((text, key) => {
            return (
              <div className="absolute " key={key}>
                {text}
              </div>
            );
          })}
        </div>
        <div
          id="name"
          className="absolute w-full h-full flex flex-col justify-center items-center text-5xl"
        >
          <HomeName hovered={hovered} setHovered={setHovered} />
          <motion.div
            className="absolute bottom-28 z-[20] flex flex-col items-center justify-center"
            key={"home-text"}
            initial={{ opacity: 0, transform: "translateY(30px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0 }}
          >
            <HomeText />
          </motion.div>
        </div>
        <div
          style={{ pointerEvents: "none" }}
          className={`absolute items-center font-bold justify-center z-[30] left-1/2 bottom-1/2 transition-all opacity ${
            hovered ? "opacity-100" : "opacity-0"
          } -translate-x-1/2`}
        >
          <HoldContinue />
        </div>
        <div
          id="3d-renderer-container"
          className="w-full h-screen absolute z-[5] select-none"
        >
          <Home3dRender hovered={hovered} setHovered={setHovered} />
        </div>
      </main>
      <div id="copyright" className="absolute bottom-2 left-2 z-10 text-sm text-neutral-500">
        © 2023-{(new Date().getFullYear())} Dylan Alvandi 
      </div>
    </HomeProvider>
  );
}
