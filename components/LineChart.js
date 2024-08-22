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
import { updateWeight, updateDataUpdated } from "../reducers/user";

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

  const calculateBMR = (weight, height, age, gender) => {
    let BMR;
    if (gender === "male") {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return Math.round(BMR); // Arrondir à l'entier le plus proche
  };

  const calculateTDEE = (BMR, activityLevel) => {
    const TDEE = BMR * activityLevel;
    return Math.round(TDEE); // Arrondir à l'entier le plus proche
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
          const fetchedLabels = data.weights.map((entry) => {
            const date = new Date(entry.date);
            return date.toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
            });
          });
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
    console.log("New weight entry:", newWeightEntry);

    fetch(`https://heaf-back-end.vercel.app/users/newWeight/${token}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWeightEntry),
    })
      .then((response) => {
        console.log("Response from weight update:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Data from weight update:", data);
        if (data.result) {
          dispatch(updateWeight(newWeight));
          console.log(newWeight);
          const BMR = calculateBMR(newWeight, height, age, gender);
          const TDEE = calculateTDEE(BMR, activityLevel);
          console.log("Calculated BMR and TDEE:", BMR, TDEE);
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
      .then((response) => {
        console.log("Response from TDEE update:", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data from TDEE update:", data);
        if (data.result) {
          const { TDEE, BMR } = data.user;
          console.log("fetching tdee et bmr : ", TDEE, BMR);
          setNewWeight("");
          dispatch(updateDataUpdated(true));
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
    <div className="w-full h-full flex-col items-start justify-center text-slate-200">
      <h4 className="text-2xl mt-8 pl-10 mb-8">Tracking du poids</h4>
      <div className="w-11/12 pl-10 h-64">
        <Line data={chartData} options={options} />
      </div>
      <form
        className="pl-10 pt-5 flex justify-evenly"
        onSubmit={combinedSubmitHandler}
      >
        <label className="">
          Nouvelle pesée(kg):
          <input
            className="px-5 py-4 text-slate-200 sm:py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-zinc-100 border-1 placeholder-opacity-50 border-zinc-200 border-opacity-70 w-1/4 ml-5 mr-5"
            type="number"
            value={newWeight}
            onChange={(e) => setNewWeight(e.target.value)}
            required
          />
          <button
            className="py-2 w-1/4 rounded-xl bg-opacity-80  text-zinc-100 border-1 border-zinc-200 mr-5 border-opacity-90 hover:bg-sky-800 transition-colors "
            type="submit"
          >
            Ajouter
          </button>
        </label>
      </form>
    </div>
  );
};

export default LineChart;
