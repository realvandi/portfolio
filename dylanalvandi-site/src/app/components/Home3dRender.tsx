"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Alvandi3dComponent from "./Alvandi3dComponent";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { Button } from "@nextui-org/react";
import { useSpring, config, animated, update } from "react-spring";
import { Vector3 } from "three";

import { useRouter } from "next/navigation";
import { HomeContext } from "./HomeContext";

// function CameraControls() {
//   const { camera } = useThree();

//   // You can adjust the camera properties here
//   camera.position.set(0, 0, 5); // Set the camera's position
//   camera.lookAt(-0.1, -0.4, -0.25); // Set the point the camera is looking at

//   return null;
// }

interface CameraControlsProps {
  cameraPosition?: [number, number, number];
}

function CameraControls({ cameraPosition = [0, 0, 5] }: CameraControlsProps) {
  const { camera } = useThree();
  const positionRef = useRef(new Vector3(...cameraPosition));
  const { timeHeldDown } = useContext(HomeContext); // Destructure timeHeldDown from HomeContext

  useEffect(() => {
    positionRef.current.set(...cameraPosition);
  }, [cameraPosition]);

  useFrame(() => {
    camera.lookAt(-0.1, -0.4, -0.25);

    // Calculate the shake intensity based on timeHeldDown
    const shakeIntensity = timeHeldDown / 50; // The longer the time held down, the bigger the shake. Cap at 0.5 for control
    const shakeX = (Math.random() - 0.5) * shakeIntensity;
    const shakeY = (Math.random() - 0.5) * shakeIntensity;
    const shakeZ = (Math.random() - 0.5) * shakeIntensity;

    // Apply shake effect to camera position
    const newPosition = positionRef.current.clone().add(new Vector3(shakeX, shakeY, shakeZ));
    camera.position.lerp(newPosition, 0.03); // Smooth transition to the target position
  });

  return null;
}

function WhiteParticles() {
  // Create an array of particle objects with initial positions
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, index) => ({
        position: [
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
          Math.random() * 10 - 10,
        ],
      })),
    []
  );

  // Ref to store particle meshes
  const particleMeshes = useRef<any>([]);

  // Update particle positions over time using useFrame
  useFrame(() => {
    particles.forEach((particle, index) => {
      const mesh = particleMeshes.current[index];
      if (mesh) {
        // Update particle position (e.g., move along the Z-axis)
        particle.position[2] += 0.003; // Adjust the speed as needed

        // Reset position when particle moves out of the view
        if (particle.position[2] > 5) {
          particle.position[2] = -10;
        }

        // Apply the updated position to the mesh
        mesh.position.set(...particle.position);
      }
    });
  });

  return (
    <>
      {particles.map((particle, index) => (
        // @ts-ignore
        <mesh
          key={index}
          ref={(mesh) => (particleMeshes.current[index] = mesh)}
          // @ts-ignore
          position={particle.position}
        >
          <sphereGeometry args={[0.01, 2, 2]} />
          <meshBasicMaterial color={0xffffff} />
        </mesh>
      ))}
    </>
  );
}

type Props = { hovered: any; setHovered: any };

export default function Home3dRender({ hovered, setHovered }: Props) {

  const router = useRouter();

  const canvasRef = useRef<any>(null);
  const longPressTimer = useRef<any>(null);

  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);

  const { timeHeldDown, setTimeHeldDown } = useContext(HomeContext);
  const { setHomePhase, homePhase } = useContext(HomeContext);

  const navigateToPage = (pageUrl: string) => {
    router.push(pageUrl); // Use router.push to navigate to the specified page
  };

  useEffect(() => {
    if (timeHeldDown >= 450 && homePhase === 0) {
      updateCameraPosition();
      setHomePhase(1);
      setTimeHeldDown(0);
      const switchi = setTimeout(()=>{
        console.log("Navigating to who..")
        navigateToPage('/who#who')
      }, 1000)
    }
  }, [timeHeldDown]);

  const updateCameraPosition = () => {
    // Update the camera position when the button is clicked
    setCameraPosition([0, 0, 100]); // Set the new camera position here
  };

  const clearLongPress = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  useEffect(() => {
    const handleTouchStart = (event: any) => {
      clearLongPress();
      event.preventDefault();
      longPressTimer.current = setTimeout(() => {
        // Handle long press if needed
      }, 500); // 500ms for long press, adjust as needed
    };

    const handleTouchEnd = () => {
      clearLongPress();
    };

    const canvasElement = canvasRef.current;

    if (canvasElement) {
      canvasElement.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      canvasElement.addEventListener("touchend", handleTouchEnd, {
        passive: false,
      });
    }

    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener("touchstart", handleTouchStart);
        canvasElement.removeEventListener("touchend", handleTouchEnd);
      }
      clearLongPress();
    };
  }, []);

  return (
    <>
      <Canvas
        ref={canvasRef}
        onContextMenu={(e) => e.preventDefault()}
        gl={{ alpha: true }}
        className={`${homePhase === 1 ? 'opacity-10' : 'opacity-100'} transition-opacity duration-[3000ms]`}
        dpr={[0.7,0.9]}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[0, 0, 5]} />
        <Alvandi3dComponent hovered={hovered} setHovered={setHovered} />
        <mesh>
          <sphereGeometry args={[0.98]} />
          <meshBasicMaterial color={"pink"} />
        </mesh>
        {/* Post-processing effects */}
        <EffectComposer>
          <DepthOfField
            target={[5, 5, 200]} // set the focus target, adjust as needed
            focalLength={0.01} // adjust the focal length for stronger/weaker blur
            bokehScale={20} // adjust the bokeh scale for larger/smaller bokeh
          />
        </EffectComposer>
        <CameraControls cameraPosition={cameraPosition as [number, number, number]} />
      </Canvas>
    </>
  );
}
