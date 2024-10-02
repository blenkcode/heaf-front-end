import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Header from "../components/Header";
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
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [caloriesDeficit, setCaloriesDeficit] = useState(-500);

  const handleAgeChange = (event) => setAge(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);
  const handleHeightChange = (event) => setHeight(event.target.value);

  console.log(activityLevel);
  console.log(caloriesDeficit);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleActivityLevelChange = (event) => {
    setActivityLevel(parseFloat(event.target.value));
  };

  const handleObjectifChange = (event) => {
    setCaloriesDeficit(parseFloat(event.target.value));
  };
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
    <main className="h-auto min-h-lvh text-sky-900 bg-diagonal-split  flex flex-col  justify-evenly items-center relative overflow-x-hidden ">
      <Header></Header>
      <div className="  z-10 w-full flex-col flex items-center  justify-center h-full px-5 pt-12 lg:pt-0  ">
        <div className="w-fit relative lg:mb-0 mb-12 2xl:mt-0 lg:mt-16  mt-10 h-auto flex flex-col justify-center items-start pt-0   ">
          <div className="w-96 h-160 lg:visible invisible absolute -top-20 -left-24 rounded-full border-8 border-sky-900 z-10 "></div>
          <div className="lg:text-6xl text-3xl font-bold ">
            Hello{" "}
            <span className="lg:text-6xl text-3xl font-bold ">{pseudo}</span>!
          </div>
          <br />
          <div className="lg:text-2xl text-lg font-normal z-50 lg:py-5 bg-diagonal-split ">
            {" "}
            Ces informations nous permettent de définir ensemble ton profil
            Heaf.
          </div>
          <div className="flex flex-col justify-between lg:flex-row mt-10 lg:mt-5   bg-diagonal-split w-3/4 z-50">
            <div className=" lg:w-fit h-auto flex flex-col justify-center lg:items-start items-center bg-diagonal-split  ">
              <div className="lg:w-80 w-full ">
                <div className=" flex justify-between items-center lg:mb-3 mb-6  ">
                  <span className="lg:text-xl text-base ">Âge :</span>
                  <input
                    value={age}
                    onChange={handleAgeChange}
                    className="px-2 py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-sky-900  border-1 border-sky-900  border-opacity-90"
                    type="text"
                  />
                </div>
                <div className=" flex justify-between items-center lg:mb-3 mb-6  ">
                  <span className="lg:text-xl text-base ">Poids (Kgs)</span>
                  <input
                    value={weight}
                    onChange={handleWeightChange}
                    className="px-2 py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-sky-900  border-1 border-sky-900  border-opacity-90"
                    type="text"
                  />
                </div>
                <div className=" flex justify-between items-center lg:mb-3 mb-6  ">
                  <span className="lg:text-xl text-base mr-5">Taille (cm)</span>
                  <input
                    value={height}
                    onChange={handleHeightChange}
                    className="px-2 py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-sky-900  border-1 border-sky-900  border-opacity-90"
                    type="text"
                  />
                </div>
                <div className=" flex justify-between items-center lg:mb-3 mb-6  ">
                  <span className="lg:text-xl text-base ">Sexe : </span>
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
            <div className="flex flex-col lg:flex-row w-fit lg:ml-10  ">
              {" "}
              <div className=" flex flex-col items-start justify-start  w-full z-50 bg-diagonal-split rounded-xl">
                {" "}
                <div className="flex items-start flex-col w-full  lg-mt-0">
                  <label className="lg:text-xl text-md lg:mb-1 mb-5 ">
                    Niveau d'activité :
                  </label>
                  <select
                    className="form-select mt-2 rounded-xl py-2 px-4 lg:w-40 w-32"
                    name="activity"
                    value={activityLevel}
                    onChange={handleActivityLevelChange}
                  >
                    <option value="1.2">Sédentaire</option>
                    <option value="1.5">Modérément actif</option>
                    <option value="1.6">Actif</option>
                    <option value="1.8">Extrêmement actif</option>
                  </select>
                </div>
                <div className="w-full  2xl:mt-10 mt-10 ">
                  <span className="lg:text-xl text-md lg:mb-1 mb-5">
                    Objectif :{" "}
                  </span>
                  <div className="lg:mt-0 mt-5">
                    <select
                      className="form-select mt-2 rounded-xl py-2 px-4 lg:w-40 w-32"
                      name="caloriesDeficit"
                      value={caloriesDeficit}
                      onChange={handleObjectifChange}
                    >
                      <option value="-500">Perte de poids</option>
                      <option value="500">Prise de muscle</option>
                      <option value="0">Maintien</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => handleSubmit()}
          className="px-8 py-2 mt-10 rounded-xl bg-opacity-80 text-sky-900  border-1 border-sky-900 border-opacity-90 hover:bg-sky-900 hover:border-slate-200 hover:text-slate-200 transition-colors "
        >
          Suivant
        </button>
      </div>
    </main>
  );
}

export default Form;
