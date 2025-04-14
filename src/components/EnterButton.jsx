import React from "react";

export default function EnterButton() {
  return (
    <button
      className="enter-button"
      style={{
        position: "absolute",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
      }}
    >
      Enter
    </button>
  );
}
