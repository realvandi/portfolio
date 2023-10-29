"use client"

import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import Alvandi3dComponent from "./Alvandi3dComponent";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";

type Props = {hovered: any, setHovered: any};

export default function Home3dRender({hovered, setHovered}: Props) {
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
        canvasElement.addEventListener('touchstart', handleTouchStart, { passive: false });
        canvasElement.addEventListener('touchend', handleTouchEnd, { passive: false });
      }
  
      return () => {
        if (canvasElement) {
          canvasElement.removeEventListener('touchstart', handleTouchStart);
          canvasElement.removeEventListener('touchend', handleTouchEnd);
        }
        clearLongPress();
      };
    }, []);
  
    return (
      <Canvas ref={canvasRef} onContextMenu={(e) => e.preventDefault()} gl={{ alpha: true }}>
        {/* <mesh position={[0, 0, -5]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial
          color={0x00ff00} // Color of the plane (you can change it)
          transparent
          opacity={0} // Set the opacity to make it transparent
        />
      </mesh> */}
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[0, 0, 5]} />
        <Alvandi3dComponent hovered={hovered} setHovered={setHovered}/>
        {/* Post-processing effects */}
      <EffectComposer>
        <DepthOfField
          target={[5, 5, 200]} // set the focus target, adjust as needed
          focalLength={0.01} // adjust the focal length for stronger/weaker blur
          bokehScale={20} // adjust the bokeh scale for larger/smaller bokeh
        />
      </EffectComposer>
      </Canvas>
    );
  }
