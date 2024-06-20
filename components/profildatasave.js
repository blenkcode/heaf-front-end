import styles from "../styles/ProfilData.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateData, updateCalories, updateobjectif } from "../reducers/user";
import { useRouter } from "next/router";

function ProfilData() {
  const dispatch = useDispatch();
  const pseudo = useSelector((state) => state.user.value.pseudo);
  const token = useSelector((state) => state.user.value.token);
  const TDEE = useSelector((state) => state.user.value.TDEE);
  const BMR = useSelector((state) => state.user.value.BMR);
  const weight = useSelector((state) => state.user.value.weight);

  const deficit = useSelector((state) => state.user.value.calories);

  const calories = TDEE + deficit;
  console.log(calories, TDEE, deficit);
  dispatch(updateobjectif(calories));
  // Récupération des données utilisateur
  useEffect(() => {
    if (token) {
      fetch(`https://heaf-back-end.vercel.app/users/${token}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            console.log(data);

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
                })
              );
              dispatch(updateCalories(data.data.calories));
            } else {
              console.error("Le tableau weights est vide ou n'existe pas.");
            }
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des données :", error);
        });
    }
  }, [token, dispatch]);

  // Mise à jour des calories après récupération des données
  // useEffect(() => {
  //   if (TDEE) {
  //     dispatch(updateCalories(calories));
  //   }
  // }, [TDEE, calories, dispatch]);

  return (
    <div className={styles.maincontainer}>
      <div className={styles.pseudo}>{pseudo} :</div>

      <div className={styles.data}>
        <span className={styles.li}>
          Poids actuel : <span className={styles.data}> {weight} Kg</span>
        </span>
        <span className={styles.li}>
          Objectif journalier :{" "}
          <span className={styles.data}> {calories} kcal </span>
        </span>
        <span className={styles.li}>
          Déficit / Surplus :{" "}
          <span className={styles.data}> {deficit} kcal</span>{" "}
        </span>
        <span className={styles.li}>
          BMR :<span className={styles.data}>{BMR} kcal</span>{" "}
        </span>
        <span className={styles.li}>
          TDEE : <span className={styles.data}>{TDEE} kcal</span>
        </span>
      </div>
    </div>
  );
}

export default ProfilData;
