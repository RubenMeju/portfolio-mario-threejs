import React from "react";
import { useTexture } from "@react-three/drei";

export default function Ground() {
  const texture = useTexture("/texture1.jpg");
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -1, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
