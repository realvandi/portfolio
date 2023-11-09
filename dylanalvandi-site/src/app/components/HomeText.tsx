import { Button } from "@nextui-org/react";
import React, { useContext } from "react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { HomeContext } from "./HomeContext";

type Props = {};

export default function HomeText({}: Props) {
  const { homePhase } = useContext(HomeContext);

  return (
    <div
      className={`${
        homePhase === 1 ? "opacity-0" : "opacity-100"
      } transition-all`}
    >
      <div className="flex flex-row  gap-6 w-full justify-center">
        <a href="https://github.com/realvandi">
          <Button className="text-2xl" isIconOnly variant="light">
            <FaGithub />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/dylanalvandi/">
          <Button className="text-2xl" isIconOnly variant="light">
            <FaLinkedin />
          </Button>
        </a>
        <a href="mailto:${geradylanalvandi@gmail.com}">
          <Button className="text-2xl" isIconOnly variant="light">
            <FaRegEnvelope />
          </Button>
        </a>
      </div>

      <div className="text-lg w-full flex flex-col items-center justify-center">
        <div>- Was the cake really a lie? -</div>
        <span className="text-sm text-neutral-500 text-center ">
          Hold down on the thingy in the middle, or <br/> play around and find secrets!
        </span>
        <span className="text-xs text-neutral-700">
          (or just use the navigation bar)
        </span>
      </div>
    </div>
  );
}
