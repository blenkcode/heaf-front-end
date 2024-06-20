import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { updateWeight, updateCaloriesData } from "../reducers/user";
import styles from "../styles/Profil.module.css";

// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const LineChart = () => {
  const dispatch = useDispatch();
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const [newWeight, setNewWeight] = useState("");
  const token = useSelector((state) => state.user.value.token);
  const height = useSelector((state) => state.user.value.height);
  const age = useSelector((state) => state.user.value.age);
  const gender = useSelector((state) => state.user.value.gender);
  const activityLevel = useSelector((state) => state.user.value.activityLevel);
  const weight = useSelector((state) => state.user.value.weight);
  const deficit = useSelector((state) => state.user.value.calories);
  console.log("poids actuel:", weight);

  const calculateBMR = (weight, height, age, gender) => {
    if (gender === "male") {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }
  };
  const calculateTDEE = (BMR, activityLevel) => {
    return BMR * activityLevel;
  };
  //récupération du poids modifié de la bdd
  useEffect(() => {
    fetch(`https://heaf-back-end.vercel.app/users/weights/${token}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          // Extract dates and weights from the fetched data
          const fetchedLabels = data.weights.map((entry) => entry.date);
          const fetchedData = data.weights.map((entry) => entry.weight);

          // Update the state with fetched data
          setLabels(fetchedLabels);
          setData(fetchedData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [newWeight]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDate = new Date().toISOString(); // Utiliser le format ISO pour une date uniforme
    const newWeightEntry = { weight: newWeight, date: currentDate };
    console.log(newWeightEntry);

    fetch(`https://heaf-back-end.vercel.app/users/newWeight/${token}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWeightEntry),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(updateWeight(newWeight));
          console.log(newWeight);
          const BMR = calculateBMR(newWeight, height, age, gender);
          const TDEE = calculateTDEE(BMR, activityLevel);
          console.log("fetch", BMR, TDEE);
          return fetch(
            `https://heaf-back-end.vercel.app/users/updateData/${token}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                BMR,
                TDEE,
              }),
            }
          );
        } else {
          throw new Error("Failed to update weight");
        }
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log("fetching tdee et bmr : ", data.TDEE, data.BMR);
          setNewWeight("");
        }
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const combinedSubmitHandler = (event) => {
    handleSubmit(event);
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Poids (kg)",
        data: data,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        pointBorderColor: "rgba(75, 192, 192, 1)",
        pointBackgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1, // Pour des courbes lissées
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          color: "#F4EBD6",
        },
      },
      tooltip: {
        backgroundColor: "#124660",
        titleColor: "#F4EBD6",
        bodyColor: "#F4EBD6",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "#F4EBD6",
        },
        ticks: {
          color: "#F4EBD6",
        },
      },
      y: {
        title: {
          display: true,
          text: "Poids (kg)",
          color: "#F4EBD6",
        },
        ticks: {
          color: "#F4EBD6",
        },
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <form
        className={styles.input}
        onSubmit={combinedSubmitHandler}
        style={{ marginTop: "20px" }}
      >
        <label className={styles.label}>
          Entrer votre nouvelle pesée(kg):
          <input
            className={styles.inputform}
            type="number"
            value={newWeight}
            onChange={(e) => setNewWeight(e.target.value)}
            required
          />
        </label>
        <button className={styles.btn} type="submit">
          Ajouter
        </button>
      </form>
      <div
        className={styles.graph}
        style={{ width: "70%", height: "280px", marginLeft: "0 auto" }}
      >
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
