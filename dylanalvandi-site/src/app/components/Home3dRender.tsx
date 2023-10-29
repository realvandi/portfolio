"use client"

import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import Alvandi3dComponent from "./Alvandi3dComponent";

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
      <Canvas ref={canvasRef} onContextMenu={(e) => e.preventDefault()}>
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[0, 0, 5]} />
        <Alvandi3dComponent hovered={hovered} setHovered={setHovered}/>
      </Canvas>
    );
  }
