import React from "react";
import { FaCode, FaGamepad, FaHammer, FaLaptopCode, FaPaintBrush, FaProjectDiagram, FaVideo } from "react-icons/fa";
import { ProjectType } from "../who/page";

type Props = { type: any };

export default function AlvandiProjectIcon({ type }: Props) {
  switch (type) {
    case ProjectType.GAME:
      return <FaGamepad />;
    case ProjectType.MEDIA:
      return <FaPaintBrush />;
    case ProjectType.OTHERS:
      return <FaProjectDiagram />;
    case ProjectType.PROGRAMMING:
      return <FaCode />;
    case ProjectType.WEBDEV:
      return <FaLaptopCode />;
    default:
      return <FaProjectDiagram />;
  }
}
