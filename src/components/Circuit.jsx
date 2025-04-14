import { useGLTF } from "@react-three/drei";

export const Circuit = () => {
  const { scene, error } = useGLTF("/models/castle.glb"); // Asegúrate de poner la ruta correcta
  if (error) {
    console.error("Error loading model", error);
    return null;
  }
  return <primitive object={scene} />;
};
