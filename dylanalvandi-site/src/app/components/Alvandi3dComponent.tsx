"use client";

import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Mesh, CylinderGeometry, Vector3, Quaternion } from "three";
import { useSpring, a } from "@react-spring/three";

const meshColor = "royalblue"

const Spikes = ({ radius, timeHeldDown }: any) => {
    const spikes = useRef<Mesh[]>([]);
    const geometry = useMemo(() => new CylinderGeometry(0, 0.005, 1, 4), []);
  
    // Calculate positions only once
    const positions = useMemo(() =>
      [...Array(60)].map(() =>
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
        const scale = 1 + Math.sin(clock.getElapsedTime() * 5 + i) * 0.3 * (timeHeldDown * 0.1);
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
          <meshBasicMaterial color={'white'}/>
        </mesh>
      );
    });
  };
  
  const BigSpikes = ({ radius, timeHeldDown }: any) => {
    const spikes = useRef<Mesh[]>([]);
    const geometry = useMemo(() => new CylinderGeometry(0, 0.01, 3, 5), []);
  
    // Calculate positions only once
    const positions = useMemo(() =>
      [...Array(17)].map(() =>
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
        const scale = 1 + Math.sin(clock.getElapsedTime() * 5 + i) * 0.05 * (timeHeldDown * 0.3);
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
          <meshBasicMaterial color={'white'}/>
        </mesh>
      );
    });
  };
  
  
  
type Props = { hovered: any; setHovered: any };

export default function Alvandi3dComponent({ hovered, setHovered }: Props) {
  const [timeHeldDown, setTimeHeldDown] = useState(0);
  const props = useSpring({ scale: hovered ? 1.4 + timeHeldDown * 0.002 : 1 });
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

  useEffect(() => {
    console.log(timeHeldDown);
  }, [timeHeldDown]);

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
        x: rotationRef.current.x + mouseData.deltaMouse.y * (hovered ? 1 : 0.2),
        y: rotationRef.current.y + mouseData.deltaMouse.x * (hovered ? 1 : 0.2),
      };

      // Apply rotation to mesh
      mesh.current.rotation.x = rotationRef.current.x + clock.getElapsedTime() * 0.1;
      mesh.current.rotation.y = rotationRef.current.y + clock.getElapsedTime() * 0.1;
    }

    // Update previous mouse position
    mouseData.prevMouse.x = mouse.x;
    mouseData.prevMouse.y = mouse.y;
  });



  return (
    <a.mesh
      ref={mesh}
      onPointerEnter={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "default";
        loggingRef.current = false;
        setTimeHeldDown(0); // Reset time held down
        clearTimeInterval(); // Clear the interval
      }}
      onPointerDown={() => {
        loggingRef.current = true;
        startLogging();
        clearTimeInterval(); // Clear existing interval if any
        timeHeldDownRef.current = setInterval(() => {
          if (loggingRef.current) {
            setTimeHeldDown((prevTime) => prevTime + 1);
          }
        }, 10);
      }}
      onPointerUp={() => {
        loggingRef.current = false;
        setTimeHeldDown(0); // Reset time held down
        clearTimeInterval(); // Clear the interval
      }}
      onContextMenu={()=>{

      }}
      scale={props.scale.to((s) => [s, s, s])}
    >
      <sphereGeometry args={[radius, 16, 16]} />
      <meshNormalMaterial />
      <Spikes radius={radius} timeHeldDown={timeHeldDown}/>
      <BigSpikes radius={radius} timeHeldDown={timeHeldDown}/>
    </a.mesh>
  );
}