import React from "react";
import { useGLTF } from "@react-three/drei";

export default function MarioKart({ position, rotation }) {
  const { scene } = useGLTF("/models/mario_kart.glb");
  scene.scale.set(1, 1, 1);
  scene.position.set(position.x, position.y, position.z);
  scene.rotation.set(0, rotation, 0);
  return <primitive object={scene} />;
}
