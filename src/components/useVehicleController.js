import { useState, useEffect, useRef } from "react";
import { Vector3 } from "three";

export function useVehicleController({
  initialPosition = new Vector3(0, 0, 0),
  initialRotation = 0,
  speed = 0.1,
  turnSpeed = 0.02,
}) {
  const [position, setPosition] = useState(initialPosition);
  const [rotation, setRotation] = useState(initialRotation);

  const positionRef = useRef(initialPosition.clone());
  const rotationRef = useRef(initialRotation);
  const keysRef = useRef({
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (keysRef.current.hasOwnProperty(e.key)) {
        keysRef.current[e.key] = true;
      }
    };
    const handleKeyUp = (e) => {
      if (keysRef.current.hasOwnProperty(e.key)) {
        keysRef.current[e.key] = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const update = () => {
      let currentVelocity = 0;
      if (keysRef.current.ArrowUp) currentVelocity = speed;
      else if (keysRef.current.ArrowDown) currentVelocity = -speed;

      let newRotation = rotationRef.current;
      if (keysRef.current.ArrowLeft) newRotation += turnSpeed;
      if (keysRef.current.ArrowRight) newRotation -= turnSpeed;
      rotationRef.current = newRotation;

      if (currentVelocity !== 0) {
        const newPos = positionRef.current.clone();
        newPos.x += Math.sin(newRotation) * currentVelocity;
        newPos.z += Math.cos(newRotation) * currentVelocity;
        positionRef.current = newPos;
      }

      setRotation(rotationRef.current);
      setPosition(positionRef.current);
      animationFrameId = requestAnimationFrame(update);
    };

    update();
    return () => cancelAnimationFrame(animationFrameId);
  }, [speed, turnSpeed]);

  return { position, rotation };
}
