import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import styles from "../styles/ProfilMacro.module.css";

// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ proteines, lipides, glucides }) => {
  const total = proteines + lipides + glucides;
  const data = {
    labels: ["Protéines", "Glucides", "Lipides"],
    datasets: [
      {
        label: "Macro-nutriments",
        data: [proteines, glucides, lipides],
        backgroundColor: [
          "rgba(255,255,255, 1)",
          "rgb(66,173,201, 1)",
          "rgb(73,150,59, 0.8)",
        ],
        borderColor: ["rgb(0,0,0, )", "rgb(0,0,0, )", "rgb(0,0,0, )"],
        borderWidth: 0,
        hoverBackgroundColor: [
          "rgba(255,255,255, 01)",
          "rgb(66,173,201, 01)",
          "rgba(73,150,59, 01)",
        ],
        hoverBorderColor: ["rgb(0,0,0, 1)", "rgb(0,0,0, 1))", "rgb(0,0,0, 1))"],
        hoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#124660",
        titleColor: "#F4EBD6",
        bodyColor: "#F4EBD6",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
      },
      datalabels: {
        color: "#fff",
        formatter: (value, context) => {
          const percentage = ((value / total) * 100).toFixed(2) + "%";
          return percentage;
        },
        font: {
          weight: "bold",
          size: 14,
        },
      },
    },
  };

  return (
    <div className={styles.chart}>
      <Pie className={styles.chart3D} data={data} options={options} />
    </div>
  );
};

export default PieChart;
