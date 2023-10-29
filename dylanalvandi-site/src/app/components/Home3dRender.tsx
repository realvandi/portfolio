"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import Alvandi3dComponent from "./Alvandi3dComponent";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";

function CameraControls() {
    const { camera } = useThree();
  
    // You can adjust the camera properties here
    camera.position.set(0, 0, 5); // Set the camera's position
    camera.lookAt(-0.1, -0.4, -0.25); // Set the point the camera is looking at
  
    return null;
  }

function WhiteParticles() {
    // Create an array of particle objects with initial positions
    const particles = useMemo(
      () =>
        Array.from({ length: 30 }, (_, index) => ({
          position: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 10],
        })),
      []
    );
  
    // Ref to store particle meshes
    const particleMeshes = useRef([]);
  
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
          <mesh key={index} ref={(mesh) => (particleMeshes.current[index] = mesh)} position={particle.position}>
            <sphereGeometry args={[0.01, 2, 2]} />
            <meshBasicMaterial color={0xffffff} />
          </mesh>
        ))}
      </>
    );
  }

type Props = { hovered: any; setHovered: any };

export default function Home3dRender({ hovered, setHovered }: Props) {
  const canvasRef = useRef<any>(null);
  const longPressTimer = useRef<any>(null);

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
    <Canvas
      ref={canvasRef}
      onContextMenu={(e) => e.preventDefault()}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight color="blue" position={[0, 0, 5]} />
      <Alvandi3dComponent hovered={hovered} setHovered={setHovered} />
      <mesh>
        <sphereGeometry args={[0.98]} />
        <meshBasicMaterial color={"pink"} />
      </mesh>
      <WhiteParticles />
      {/* Post-processing effects */}
      <EffectComposer>
        <DepthOfField
          target={[5, 5, 200]} // set the focus target, adjust as needed
          focalLength={0.01} // adjust the focal length for stronger/weaker blur
          bokehScale={20} // adjust the bokeh scale for larger/smaller bokeh
        />
      </EffectComposer>
      <CameraControls />
    </Canvas>
  );
}
