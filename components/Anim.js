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
    <div className="w-full">
      <Spline
        scene="https://prod.spline.design/5wAMHQgZEspSGyGg/scene.splinecode"
        onLoad={handleLoad}
        width={1123}
        height={905}
      />
    </div>
  );
}

export default Anim;
