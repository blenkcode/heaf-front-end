import styles from "../styles/ProfilGraph.module.css";

import { useState } from "react";
import LineChart from "./LineChart";

function ProfilGraph() {
  return (
    <div className="w-1/2 rounded-xl ml-5 flex justify-center items-center  bg-sky-900">
      <LineChart />
    </div>
  );
}

export default ProfilGraph;
