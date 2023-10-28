"use client"

import { Canvas } from "@react-three/fiber";
import React from "react";
import Alvandi3dComponent from "./Alvandi3dComponent";

type Props = {};

export default function Home3dRender({}: Props) {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="blue" position={[0, 0, 5]} />
      <Alvandi3dComponent/>
    </Canvas>
  );
}
