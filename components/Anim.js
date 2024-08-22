import Spline from "@splinetool/react-spline";
import React from "react";

function Anim() {
  return (
    <div className="w-full h-auto">
      {" "}
      {/* Conteneur responsive */}
      <Spline
        scene="https://prod.spline.design/5wAMHQgZEspSGyGg/scene.splinecode"
        width={1123}
        height={905}
      />
    </div>
  );
}

export default Anim;
