"use client";
import React from "react";
import { Vector3 } from "three";
import { useVehicleController } from "./components/useVehicleController";
import CanvasScene from "./components/CanvasScene";
import EnterButton from "./components/EnterButton";
import "./styles.css";

export default function Portfolio3D() {
  const { position, rotation } = useVehicleController({
    initialPosition: new Vector3(0, 0, 0),
    initialRotation: 0,
    speed: 0.1,
    turnSpeed: 0.02,
  });

  const cardData = [
    {
      image: "/images-projects/bomberman.webp",
      position: [5, 1.5, -3],
      rotation: [0, Math.PI / 4, 0],
      width: 2,
      height: 3,
    },
    {
      image: "/images-projects/bomberman.webp",
      position: [-4, 1.5, 2],
      rotation: [0, -Math.PI / 6, 0],
      width: 2,
      height: 3,
    },
  ];

  const proximityThreshold = 3;
  const showEnterButton = cardData.some((card) => {
    const cardPos = new Vector3(...card.position);
    return cardPos.distanceTo(position) < proximityThreshold;
  });

  return (
    <>
      {showEnterButton && <EnterButton />}
      <CanvasScene
        position={position}
        rotation={rotation}
        cardData={cardData}
      />
    </>
  );
}
