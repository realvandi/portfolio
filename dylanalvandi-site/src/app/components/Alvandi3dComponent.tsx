"use client";

import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useMemo, useState, useEffect, useContext } from "react";
import { Mesh, CylinderGeometry, Vector3, Quaternion } from "three";
import { useSpring, a } from "@react-spring/three";
import { HomeContext } from "./HomeContext";


const meshColor = "royalblue";

const Spikes = ({ radius, timeHeldDown }: any) => {
  const spikes = useRef<Mesh[]>([]);
  const geometry = useMemo(() => new CylinderGeometry(0, 0.005, 1, 4), []);

  // Calculate positions only once
  const positions = useMemo(
    () =>
      [...Array(15)].map(() =>
        new Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        )
          .normalize()
          .multiplyScalar(radius)
      ),
    [radius]
  );

  useFrame(({ clock }) => {
    spikes.current.forEach((spike, i) => {
      // const scale = 1 + Math.sin(clock.getElapsedTime() * 5 + i) * 0.3;
      const scale =
        1 +
        Math.sin(clock.getElapsedTime() * 5 + i + timeHeldDown * 0.01) *
          0.05 *
          (timeHeldDown * 0.3);
      if (spike) {
        spike.scale.set(1, scale, 1);
      }
    });
  });

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
        <meshBasicMaterial color={"white"} />
      </mesh>
    );
  });
};

const BigSpikes = ({ radius, timeHeldDown }: any) => {
  const spikes = useRef<Mesh[]>([]);
  const geometry = useMemo(() => new CylinderGeometry(0, 0.01, 2, 5), []);

  // Calculate positions only once
  const positions = useMemo(
    () =>
      [...Array(7)].map(() =>
        new Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        )
          .normalize()
          .multiplyScalar(radius)
      ),
    [radius]
  );

  useFrame(({ clock }) => {
    spikes.current.forEach((spike, i) => {
      const scale =
        1 +
        Math.sin(clock.getElapsedTime() * 5 + i + timeHeldDown * 0.03) * 0.05;
      if (spike) {
        spike.scale.set(1, scale, 1);
      }
    });
  });

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
        <meshBasicMaterial color={"white"} />
      </mesh>
    );
  });
};

const SurfaceSpikes = ({ radius, timeHeldDown }: any) => {
  const spikes = useRef<Mesh[]>([]);
  const geometry = useMemo(() => new CylinderGeometry(0, 0.5, 0.3, 5), []);

  // Calculate positions only once
  const positions = useMemo(
    () =>
      [...Array(10)].map(() =>
        new Vector3(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6
        )
          .normalize()
          .multiplyScalar(radius)
      ),
    [radius]
  );

  useFrame(({ clock }) => {
    spikes.current.forEach((spike, i) => {
      const scale =
        1 + Math.sin(clock.getElapsedTime() * 8 + i + timeHeldDown * 0.2) * 0.1;
      if (spike) {
        spike.scale.set(1, scale, 1);
      }
    });
  });

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
        <meshNormalMaterial />
      </mesh>
    );
  });
};

const GigaSpikes = ({ radius, timeHeldDown }: any) => {
  const spikes = useRef<Mesh[]>([]);
  const geometry = useMemo(() => new CylinderGeometry(0, 0.2, 8, 3), []);

  // Calculate positions only once
  const positions = useMemo(
    () =>
      [...Array(4)].map(() =>
        new Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        )
          .normalize()
          .multiplyScalar(-5)
      ),
    [radius]
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
        <meshBasicMaterial transparent opacity={0.05} color={"white"} />
      </mesh>
    );
  });
};

type Props = { hovered: any; setHovered: any };

export default function Alvandi3dComponent({ hovered, setHovered }: Props) {
  const { timeHeldDown, setTimeHeldDown, homePhase } = useContext(HomeContext)!;
  const props = useSpring({ scale: hovered ? 1.2 + timeHeldDown * 0.002 : 1 });
  const loggingRef = useRef(false);
  const timeHeldDownRef = useRef<NodeJS.Timeout | null>(null);

  const startLogging = () => {
    if (loggingRef.current) {
      requestAnimationFrame(startLogging);
    } else {
      console.log("Pointer lifted");
    }
  };

  const clearTimeInterval = () => {
    if (timeHeldDownRef.current) {
      clearInterval(timeHeldDownRef.current);
      timeHeldDownRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      loggingRef.current = false;
      clearTimeInterval();
    };
  }, []);


  const { mouse } = useThree();

  const mesh = useRef<any>(null);
  const radius = 1;

  const rotationRef = useRef({ x: 0, y: 0 });

  const mouseData = useMemo(() => {
    return {
      prevMouse: { x: 0, y: 0 },
      deltaMouse: { x: 0, y: 0 },
    };
  }, []); // Empty dependency array ensures this object is created once

  useFrame(({ clock, mouse }) => {
    if (mesh.current) {
      // Calculate delta in mouse position
      mouseData.deltaMouse.x = mouse.x - mouseData.prevMouse.x;
      mouseData.deltaMouse.y = mouse.y - mouseData.prevMouse.y;

      // Update rotation based on delta
      rotationRef.current = {
        x: rotationRef.current.x - mouseData.deltaMouse.y * (hovered ? 4 : 1),
        y: rotationRef.current.y + mouseData.deltaMouse.x * (hovered ? 4 : 1),
      };

      // Apply rotation to mesh
      mesh.current.rotation.x =
        rotationRef.current.x;
      mesh.current.rotation.y =
        rotationRef.current.y +
        clock.getElapsedTime() * (0.1);
    }

    // Update previous mouse position
    mouseData.prevMouse.x = mouse.x;
    mouseData.prevMouse.y = mouse.y;
  });

  useEffect(()=>{
    if(homePhase > 0) {
      loggingRef.current = false;
      setHovered(false);
    }
  },[homePhase])

  const incrementTime = () => {
    setTimeHeldDown((prevTimeHeldDown) => prevTimeHeldDown + 1);
  };

  return (
    <a.mesh
      ref={mesh}
      onPointerEnter={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
        console.log('pointer enter')
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "default";
        loggingRef.current = false;
        setTimeHeldDown(0); // Reset time held down
        clearTimeInterval(); // Clear the interval
        console.log('pointer leave')
      }}
      onPointerDown={() => {
        loggingRef.current = true;
        startLogging();
        clearTimeInterval(); // Clear existing interval if any
        timeHeldDownRef.current = setInterval(() => {
          if (loggingRef.current) {
            incrementTime();
          }
        }, 10);
        console.log('pointer down')
      }}
      // onPointerUp={() => {
      //   loggingRef.current = false;
      //   setTimeHeldDown(0); // Reset time held down
      //   clearTimeInterval(); // Clear the interval
      //   console.log('pointer up')
      // }}
      onContextMenu={() => {}}
      scale={props.scale.to((s) => [s, s, s])}
    >
      <sphereGeometry args={[radius, 8, 8]} />
      <meshNormalMaterial />
      <Spikes radius={radius} timeHeldDown={timeHeldDown} />
      <BigSpikes radius={radius} timeHeldDown={timeHeldDown} />
      <SurfaceSpikes radius={radius} timeHeldDown={timeHeldDown} />
      <GigaSpikes radius={radius} timeHeldDown={timeHeldDown} />
    </a.mesh>
  );
}
