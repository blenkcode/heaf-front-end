import Spline from "@splinetool/react-spline";
import React from "react";

function Anim({ onLoad }) {
  const handleLoad = (spline) => {
    // Vérifie si onLoad est une fonction avant de l'appeler
    if (typeof onLoad === "function") {
      onLoad();
    }
  };

  return (
    <div className="">
      <Spline
        scene="https://prod.spline.design/iTuhOir4R10EAZrO/scene.splinecode"
        onLoad={handleLoad}
        width={844}
        height={907}
      />
    </div>
  );
}

export default Anim;
