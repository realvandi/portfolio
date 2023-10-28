import { Button } from "@nextui-org/button";
import Image from "next/image";
import { NAVBAR_HEIGHT } from "./sizes";
import Home3dRender from "./components/Home3dRender";

export default function Home() {
  return (
    <main
      className={`relative`}
      style={{ height: `calc(100vh - ${NAVBAR_HEIGHT})` }}
    >
      <div
        id="name"
        className="absolute w-full h-full flex flex-col justify-center items-center text-5xl"
      >
        <div className="z-[10] -translate-x-1/2">DYLAN</div>
        <div className="z-[0] translate-x-1/2 font-bold">ALVANDI</div>
      </div>
      <div id="3d-renderer-container" className="w-full h-full absolute z-[5]">
        <Home3dRender />
      </div>
    </main>
  );
}
