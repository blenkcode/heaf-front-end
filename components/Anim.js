import Spline from "@splinetool/react-spline";
import React from "react";

function Anim() {
  return (
    <div className="w-full ">
      {" "}
      {/* Conteneur responsive */}
      <Spline
        scene="https://prod.spline.design/5wAMHQgZEspSGyGg/scene.splinecode"
        width={1123}
        height={905}
        className="   border-slate-200 bg rounded-full"
      />
    </div>
  );
}

export default Anim;
