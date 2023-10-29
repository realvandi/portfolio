import { useFrame } from "@react-three/fiber";
import React, { useRef, useMemo, useState } from "react";
import { Mesh, CylinderGeometry, Vector3, Quaternion } from "three";
import { useSpring, a } from "@react-spring/three";

const Spikes = ({ radius }: any) => {
  const spikes = useRef<Mesh[]>([]);
  const geometry = useMemo(() => new CylinderGeometry(0, 0.4, 0.2, 7), []);

  useFrame(({ clock }) => {
    spikes.current.forEach((spike, i) => {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 5 + i) * 0.3;
      if (spike) {
        spike.scale.set(1, scale, 1);
      }
    });
  });

  const positions = [...Array(40)].map(() =>
    new Vector3(
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2
    )
      .normalize()
      .multiplyScalar(radius)
  );

  return positions.map((position, index) => {
    const up = new Vector3(0, 1, 0);
    const quaternion = new Quaternion().setFromUnitVectors(
      up,
      position.clone().normalize()
    );

    return (
      <mesh
        key={index}
        position={position}
        quaternion={quaternion}
        ref={(el) => {
          if (el) spikes.current[index] = el;
        }}
        geometry={geometry}
      >
        <meshLambertMaterial color="royalblue" />
      </mesh>
    );
  });
};

export default function Alvandi3dComponent() {
  const [hovered, setHovered] = useState(false);

  const props = useSpring({ scale: hovered ? 2 : 1 });

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

  const mesh = useRef<Mesh>(null);
  const radius = 1;

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = yp * 0.06 + clock.getElapsedTime() * 0.05;
      mesh.current.rotation.y = xp * 0.06 + clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <a.mesh
      ref={mesh}
      onPointerEnter={() => {
        setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
      }}
      scale={props.scale.to((s) => [s, s, s])}
    >
      <sphereGeometry args={[radius, 32, 32]} />
      <meshLambertMaterial color="royalblue" />
      <Spikes radius={radius} />
    </a.mesh>
  );
}
