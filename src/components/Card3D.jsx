import React from "react";
import { useTexture } from "@react-three/drei";

export default function Card3D({
  image,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  width = 2,
  height = 3,
}) {
  const texture = useTexture(image);
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
