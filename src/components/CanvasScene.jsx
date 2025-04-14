import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MarioKart from "./MarioKart";
import Ground from "./Ground";
import Cards from "./Cards";

export default function CanvasScene({ position, rotation, cardData }) {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 3, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <MarioKart position={position} rotation={rotation} />
        <Ground />
        <Cards cardData={cardData} />
        <OrbitControls enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}
