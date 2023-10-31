import React from "react";
import {
  FaCode,
  FaGamepad,
  FaHammer,
  FaLaptopCode,
  FaPaintBrush,
  FaProjectDiagram,
  FaVideo,
} from "react-icons/fa";
import { ProjectType } from "../types";

type Props = { type: any };

export default function AlvandiProjectIcon({ type }: Props) {
  switch (type) {
    case ProjectType.GAME:
      return (
        <div className="text-violet-800">
          <FaGamepad />
        </div>
      );
    case ProjectType.MEDIA:
      return (
        <div className="text-red-600">
          <FaPaintBrush />
        </div>
      );
    case ProjectType.OTHERS:
      return (
        <div className="text-sky-500">
          <FaProjectDiagram />
        </div>
      );
    case ProjectType.PROGRAMMING:
      return (
        <div className="text-emerald-500">
          <FaCode />
        </div>
      );
    case ProjectType.WEBDEV:
      return (
        <div className="text-pink-700">
          <FaLaptopCode />
        </div>
      );
    default:
      return (
        <div className="text-sky-500">
          <FaProjectDiagram />
        </div>
      );
  }
}
