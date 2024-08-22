import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { useRouter } from "next/router";

import Anim from "../components/Anim";
import React from "react";
function Form({}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState(null);
  const [caloriesDeficit, setCaloriesDeficit] = useState(null);

  const handleAgeChange = (event) => setAge(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);
  const handleHeightChange = (event) => setHeight(event.target.value);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleActivityLevelChange = (event) =>
    setActivityLevel(Number(event.target.value));
  const handleObjectifChange = (event) =>
    setCaloriesDeficit(Number(event.target.value));
  const token = useSelector((state) => state.user.value.token);

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

  const handleSubmit = () => {
    const BMR = calculateBMR(weight, height, age, gender);
    const TDEE = calculateTDEE(BMR, activityLevel);
    const currentDate = new Date().toISOString(); // Utiliser le format ISO pour une date uniforme
    const newWeightEntry = { weight: weight, date: currentDate };

    fetch(`https://heaf-back-end.vercel.app/users/initData/${token}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        age,
        weight,
        weights: [newWeightEntry], // Envoyer comme un tableau d'objets
        height,
        gender,
        activityLevel,
        caloriesDeficit,
        BMR,
        TDEE,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          router.push("/profil");
        }
      });
  };
  const pseudo = useSelector((state) => state.user.value.pseudo);
  console.log(pseudo);
  return (
    <main className="h-auto min-h-lvh text-slate-200 bg-gradient-to-br from-sky-600 to-sky-900 flex flex-col xl:flex-row justify-evenly items-center relative overflow-x-hidden ">
      <div className=" w-full xl:w-1/2 h-full pl-12 lg:pl-32 ">
        <div className="w-full mb-12 2xl:mt-0 mt-16 h-auto flex flex-col justify-center items-start pt-0 pb-10  ">
          <div className="text-6xl  font-bold ">
            Hello <span className="text-6xl  font-normal ">{pseudo}</span>!
          </div>
          <br />
          <div className="text-2xl font-normal ">
            {" "}
            Ces informations nous permettent de définir ensemble ton profil
            Heaf.
          </div>
        </div>

        <div className="flex flex-col 2xl:flex-row xl:flex-col lg:flex-row w-full ">
          {" "}
          <div className=" w-fit h-auto flex flex-col justify-center items-start ">
            <div className="w-80  ">
              <div className=" flex justify-between items-start mb-6">
                <span className="text-xl ">Âge :</span>
                <input
                  value={age}
                  onChange={handleAgeChange}
                  className="px-2 py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-zinc-100 border-1 border-zinc-200 border-opacity-90"
                  type="text"
                />
              </div>
              <div className=" flex justify-between items-start mb-6">
                <span className="text-xl">Poids (Kgs)</span>
                <input
                  value={weight}
                  onChange={handleWeightChange}
                  className="px-2 py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-zinc-100 border-1 border-zinc-200 border-opacity-90"
                  type="text"
                />
              </div>
              <div className=" flex justify-between items-start mb-6">
                <span className="text-xl">Taille (cm)</span>
                <input
                  value={height}
                  onChange={handleHeightChange}
                  className="px-2 py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-zinc-100 border-1 border-zinc-200 border-opacity-90"
                  type="text"
                />
              </div>
              <div className=" flex justify-between items-center mb-6">
                <span className="text-xl">Sexe : </span>
                <div className="flex items-center justify-center mt-1">
                  <div className=" ">
                    <input
                      className=""
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleGenderChange}
                    />
                    <label className="ml-2 text-lg ">Femme</label>
                  </div>
                  <div className="ml-6">
                    <input
                      className=" "
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleGenderChange}
                    />
                    <label className="ml-2 text-lg ">Homme</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex 2xl:flex-col items-start justify-between 2xl:pl-24 pl-0 xl:mt-5 lg:ml-24 xl:ml-0 w-96 ">
            {" "}
            <div className="flex items-start flex-col w-full ">
              <span className="text-xl  mb-5">Niveau d'activité :</span>

              <div className="femme">
                <label className="text-md ">
                  <input
                    className="mr-2"
                    type="radio"
                    name="activity"
                    value="1.2"
                    checked={activityLevel === 1.2}
                    onChange={handleActivityLevelChange}
                  />
                  Sédentaire
                </label>
              </div>
              <div className="homme">
                <label className="text-md ">
                  <input
                    className="mr-2"
                    type="radio"
                    name="activity"
                    value="1.5"
                    checked={activityLevel === 1.5}
                    onChange={handleActivityLevelChange}
                  />
                  Modérément actif
                </label>
              </div>
              <div className="homme">
                <label className="text-md ">
                  <input
                    className="mr-2"
                    type="radio"
                    name="activity"
                    value="1.6"
                    checked={activityLevel === 1.6}
                    onChange={handleActivityLevelChange}
                  />
                  Actif
                </label>
              </div>
              <div className="homme">
                <label className="text-md ">
                  <input
                    className="mr-2"
                    type="radio"
                    name="activity"
                    value="1.8"
                    checked={activityLevel === 1.8}
                    onChange={handleActivityLevelChange}
                  />
                  Extrêmement actif
                </label>
              </div>
            </div>
            <div className="w-full 2xl:mt-8">
              <span className="text-xl  mb-5">Objectif : </span>
              <div className="mt-5">
                <div className="femme">
                  <label className="text-md ">
                    <input
                      className="mr-2"
                      type="radio"
                      name="caloriesDeficit"
                      value="-500"
                      checked={caloriesDeficit === -500}
                      onChange={handleObjectifChange}
                    />
                    Perte de poids
                  </label>
                </div>
                <div className="homme">
                  <label className="text-md ">
                    <input
                      className="mr-2"
                      type="radio"
                      name="caloriesDeficit"
                      value="500"
                      checked={caloriesDeficit === 500}
                      onChange={handleObjectifChange}
                    />
                    Prise de muscle
                  </label>
                </div>
                <div className="homme">
                  <label className="text-md ">
                    <input
                      className="mr-2"
                      type="radio"
                      name="caloriesDeficit"
                      value="0"
                      checked={caloriesDeficit === 0}
                      onChange={handleObjectifChange}
                    />
                    Maintien
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleSubmit()}
          className="mt-10 px-8 py-2 rounded-xl bg-opacity-80  text-zinc-100 border-1 border-zinc-200 border-opacity-90 hover:bg-sky-800 transition-colors "
        >
          Suivant
        </button>
      </div>
      <div className="w-auto h-fit z-20">
        {/* z-index élevé pour Anim */}
        <Anim />
      </div>
    </main>
  );
}

export default Form;
