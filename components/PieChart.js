import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "../styles/ProfilMacro.module.css";

// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ proteines, lipides, glucides }) => {
  const data = {
    labels: ["Protéines", "Glucides", "Lipides"],
    datasets: [
      {
        label: "Macro-nutriments",
        data: [proteines, glucides, lipides], // Exemple de données
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(100, 186, 83, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(100, 186, 83, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(100, 186, 83, 0.4)",
          "rgba(255, 206, 86, 0.4)",
        ],
        hoverBorderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(100, 186, 83, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        hoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Pour permettre la personnalisation de la taille
    plugins: {
      legend: {
        display: false, // Désactiver l'affichage de la légende
      },
      tooltip: {
        backgroundColor: "#124660",
        titleColor: "#F4EBD6",
        bodyColor: "#F4EBD6",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
      },
    },
  };

  return (
    <div className={styles.chart}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
