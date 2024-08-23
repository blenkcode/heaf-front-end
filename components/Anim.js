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
        scene="https://my.spline.design/untitled-d0c9089c8ec0b772d1808c96ecc1eb27/"
        onLoad={handleLoad}
        width={804}
        height={559}
      />
    </div>
  );
}

export default Anim;
