import React from "react";
import "../styles/Pokeball.css";

const Pokeball = (): React.ReactElement => {
  return (
    <div className="ball_container">
      <div className="ball_top"></div>
      <div className="ball_center"></div>
      <div className="ball_bottom"></div>
    </div>
  );
};

export default Pokeball;
