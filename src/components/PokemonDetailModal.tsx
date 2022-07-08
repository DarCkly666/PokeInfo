import React from "react";
import { createPortal } from "react-dom";

const PokemonDetailModal = () => {
  const modal = document.getElementById("modal");
  if (!modal) return null;
  return createPortal(
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#00000050",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 20,
      }}
    >
      <h2>Modal</h2>
    </div>,
    modal
  );
};

export default PokemonDetailModal;
