import styles from "../styles/ProfilGraph.module.css";
import Header from "./Header";
import SignUp from "./SignUp";
import Form from "./Form";
import { useState } from "react";
import LineChart from "./LineChart";

function ProfilGraph() {
  return (
    <div className={styles.maincontainer}>
      <LineChart />
    </div>
  );
}

export default ProfilGraph;
