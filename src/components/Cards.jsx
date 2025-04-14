import React from "react";
import Card3D from "./Card3D";

export default function Cards({ cardData }) {
  return (
    <>
      {cardData.map((card, index) => (
        <Card3D
          key={index}
          image={card.image}
          position={card.position}
          rotation={card.rotation}
          width={card.width}
          height={card.height}
        />
      ))}
    </>
  );
}
