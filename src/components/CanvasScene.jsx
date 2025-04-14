import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";
import MarioKart from "./MarioKart";
import { Circuit } from "./Circuit";

// Calcula la posición de la cámara justo detrás del kart.
// Los tres valores representan [desplazamiento lateral, altura, distancia atrás].
// Como usamos new Vector3(offset[0], offset[1], -offset[2]),
// un offset de [0, 0.2, 0.1] posiciona la cámara 0.2 unidades arriba y 0.1 unidades detrás.
function FollowCamera({ kartRef, offset = [0, 0.2, 0.1] }) {
  useFrame(({ camera }) => {
    if (kartRef.current) {
      const kartPos = kartRef.current.position;
      const kartRotation = kartRef.current.rotation.y;

      // Creamos el vector offset y lo rotamos según la rotación del kart.
      const offsetVector = new Vector3(offset[0], offset[1], -offset[2]);
      offsetVector.applyAxisAngle(new Vector3(0, 1, 0), kartRotation);

      // La posición deseada para la cámara es la posición del kart más el offset rotado.
      const desiredCameraPos = kartPos.clone().add(offsetVector);

      camera.position.copy(desiredCameraPos);
      camera.lookAt(kartPos);
    }
  });
  return null;
}

export default function CanvasScene({ position, rotation, cardData }) {
  const kartRef = useRef();

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0.2, 0.1], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <MarioKart position={position} rotation={rotation} ref={kartRef} />
        <Circuit />
        <FollowCamera kartRef={kartRef} offset={[0, 0.3, 0.75]} />
        <OrbitControls enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}
