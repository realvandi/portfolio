import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";

type Props = {};

export default function Alvandi3dComponent({}: Props) {
  const mesh = useRef<Mesh>(null);

  /*
     MOUSELOCATION
     */
  var xp = 0,
    yp = 0;
  var mouseX = 0,
    mouseY = 0;
  var diff = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX * 100) / window.innerWidth;
    mouseY = (e.clientY * 100) / window.innerHeight;
  });

  setInterval(function () {
    xp += (mouseX - xp) / 10;
    yp += (mouseY - yp) / 10;
  }, 20);

  useFrame(({ clock }) => {
    if (mesh.current) {
      // Check if the mesh is not null
      mesh.current.rotation.x = yp*0.06 + clock.getElapsedTime() * 0.05;
      mesh.current.rotation.y = xp*0.06 + clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  );
}
