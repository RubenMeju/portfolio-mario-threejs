import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const MarioKart = forwardRef(({ position, rotation }, ref) => {
  const { scene } = useGLTF("/models/mario_kart.glb");

  // Ajustamos la escala, posición y rotación del modelo.
  scene.scale.set(0.05, 0.05, 0.05);
  scene.position.set(position.x, position.y, position.z);
  scene.rotation.set(0, rotation, 0);

  return <primitive object={scene} ref={ref} />;
});

export default MarioKart;
