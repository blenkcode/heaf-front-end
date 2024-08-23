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
        width={804}
        height={559}
      />
    </div>
  );
}

export default Anim;
