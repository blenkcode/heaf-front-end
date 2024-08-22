import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  updateData,
  updateObjectif,
  updateDataUpdated,
} from "../reducers/user";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faWeightScale,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import Anim2 from "./Anim2";

import React from "react";

function ProfilData() {
  const dispatch = useDispatch();
  const pseudo = useSelector((state) => state.user.value.pseudo);
  const token = useSelector((state) => state.user.value.token);
  const TDEE = useSelector((state) => state.user.value.TDEE);
  const BMR = useSelector((state) => state.user.value.BMR);
  const weight = useSelector((state) => state.user.value.weight);
  const dataUpdated = useSelector((state) => state.user.value.dataUpdated);
  const caloriesDeficit = useSelector(
    (state) => state.user.value.caloriesDeficit
  );
  const [objectif, setObjectif] = useState(null);
  dispatch(updateObjectif(objectif));

  // const calories = TDEE + deficit;

  // dispatch(updateobjectif(calories));
  // Récupération des données utilisateur
  useEffect(() => {
    if (token) {
      fetch(`https://heaf-back-end.vercel.app/users/${token}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            // Vérifier si le tableau weights existe et contient des éléments
            const weights = data.data.weights;

            if (weights) {
              dispatch(
                updateData({
                  weight: data.data.weights[weights.length - 1].weight, // Accéder au poids du dernier élément
                  height: data.data.height,
                  gender: data.data.gender,
                  activityLevel: data.data.activityLevel,
                  BMR: data.data.BMR,
                  TDEE: data.data.TDEE,
                  age: data.data.age,
                  caloriesDeficit: data.data.caloriesDeficit,
                })
              );
              const newObjectif = data.data.TDEE + data.data.caloriesDeficit;
              setObjectif(newObjectif);
              dispatch(updateDataUpdated(false));
            } else {
              console.error("Le tableau weights est vide ou n'existe pas.");
            }
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des données :", error);
        });
    }
  }, [token, dispatch, dataUpdated]);
  // useEffect(() => {
  //   const newObjectif = TDEE - caloriesDeficit;
  //   setObjectif(newObjectif);
  // }, [token, dispatch]);

  return (
    <div className="bg-sky-900 flex items-center w-full text-slate-200 p-10 relative mb-5 rounded-xl">
      <div className=" w-11/12">
        <div className="text-2xl mb-8">{pseudo}</div>
        <div className=" flex w-full">
          <span className="border-slate-300 border-1 border-opacity-80 rounded-xl flex justify-center  hover:bg-sky-800 transition-colors  w-60 h-fit  mr-8 flex-col items-start py-2 pl-4">
            <div className="flex justify-between w-full pr-2">
              Poids <FontAwesomeIcon className="p-1" icon={faWeightScale} />
            </div>{" "}
            <span className="text-3xl mt-2">
              {" "}
              {weight} <span className="text-2xl">Kg</span>{" "}
            </span>
          </span>
          <span className="border-slate-300 border-1 border-opacity-80 rounded-xl flex justify-center   w-60 h-fit hover:bg-sky-800 transition-colors  mr-8 flex-col items-start py-2 pl-4">
            <div className="flex justify-between w-full pr-2">
              Objectif <FontAwesomeIcon className="p-1" icon={faBullseye} />
            </div>{" "}
            <span className="text-3xl mt-2">
              {" "}
              {objectif} <span className="text-2xl">Kcal</span>{" "}
            </span>
          </span>
          <span className="border-slate-300 border-1 border-opacity-80 rounded-xl flex justify-center   w-60 h-fit hover:bg-sky-800 transition-colors  mr-8 flex-col items-start py-2 pl-4">
            <div className="flex justify-between w-full pr-2">
              BMR <FontAwesomeIcon className="p-1" icon={faFire} />
            </div>{" "}
            <span className="text-3xl mt-2">
              {" "}
              {BMR} <span className="text-2xl">Kcal</span>{" "}
            </span>
          </span>
          <span className="border-slate-300 border-1 border-opacity-80 rounded-xl flex justify-center   w-60 h-fit hover:bg-sky-800 transition-colors   mr-8 flex-col items-start py-2 pl-4">
            <div className="flex justify-between w-full pr-2">
              TDEE <FontAwesomeIcon className="p-1" icon={faFire} />
            </div>{" "}
            <span className="text-3xl mt-2">
              {" "}
              {TDEE} <span className="text-2xl">Kcal</span>{" "}
            </span>
          </span>
        </div>
      </div>

      <div className="w-1/12 flex items-center ">
        {" "}
        <Anim2></Anim2>
      </div>
    </div>
  );
}

export default ProfilData;
