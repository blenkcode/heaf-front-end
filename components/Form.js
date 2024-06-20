import styles from "../styles/Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { act, useState } from "react";
import { updateData } from "../reducers/user";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState(null);
  const [caloriesDeficit, setCaloriesDeficit] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

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
    if (gender === "male") {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }
  };
  const calculateTDEE = (BMR, activityLevel) => {
    return BMR * activityLevel;
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
  return (
    <div className={styles.maincontainer}>
      <div className={styles.contentleft}>
        <div className={styles.bienvenue}>
          Hello <span className={styles.pseudo}>{pseudo}</span>!
        </div>
        <br />
        Ces informations nous permettent de définir ensemble ton profil Heaf.
      </div>

      <div className={styles.log}>
        <div className={styles.titlemain}>Formulaire Inscription </div>
        <div className={styles.inscriptioncontainer}>
          {" "}
          <div className={styles.inscription}>
            <span className={styles.label}>Âge</span>
            <input
              value={age}
              onChange={handleAgeChange}
              className={styles.input}
              type="text"
            />
            <span className={styles.label}>Poids (Kgs)</span>
            <input
              value={weight}
              onChange={handleWeightChange}
              className={styles.input}
              type="text"
            />
            <span className={styles.label}>Taille (cm)</span>
            <input
              value={height}
              onChange={handleHeightChange}
              className={styles.input}
              type="text"
            />
            <span className={styles.label}>Sexe</span>
            <div className={styles.sexe}>
              <div className={styles.femme}>
                <label>
                  <input
                    className={styles.checkbox}
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleGenderChange}
                  />
                  Femme
                </label>
              </div>
              <div className={styles.homme}>
                <label>
                  <input
                    className={styles.checkbox}
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleGenderChange}
                  />
                  Homme
                </label>
              </div>
            </div>
          </div>
          <div className={styles.inscriptionright}>
            <span className={styles.label}>Niveau d'activité</span>
            <div className={styles.sexe}>
              <div className={styles.femme}>
                <label>
                  <input
                    className={styles.checkbox}
                    type="radio"
                    name="activity"
                    value="1.2"
                    checked={activityLevel === 1.2}
                    onChange={handleActivityLevelChange}
                  />
                  Sédentaire
                </label>
                <FontAwesomeIcon
                  className={styles.icon}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  icon={faInfoCircle}
                />
              </div>
              <div className={styles.homme}>
                <label>
                  <input
                    className={styles.checkbox}
                    type="radio"
                    name="activity"
                    value="1.5"
                    checked={activityLevel === 1.5}
                    onChange={handleActivityLevelChange}
                  />
                  Moderemment actif
                </label>
              </div>
              <div className={styles.homme}>
                <label>
                  <input
                    className={styles.checkbox}
                    type="radio"
                    name="activity"
                    value="1.6"
                    checked={activityLevel === 1.6}
                    onChange={handleActivityLevelChange}
                  />
                  Actif
                </label>
              </div>
              <div className={styles.homme}>
                <label>
                  <input
                    className={styles.checkbox}
                    type="radio"
                    name="activity"
                    value="1.8"
                    checked={activityLevel === 1.8}
                    onChange={handleActivityLevelChange}
                  />
                  Extremêment actif
                </label>
              </div>

              {showPopup && (
                <div className={styles.popup}>
                  <div className={styles.titlepopup}>
                    <u>Sédentaire :</u>{" "}
                  </div>{" "}
                  Employé de bureau sans exercice.
                  <br></br>
                  <br></br>
                  <div className={styles.titlepopup}>
                    <u>Moderemment actif :</u>{" "}
                  </div>{" "}
                  Emploi sédentaire avec 1 heure de cardio/haltérophilie par
                  jour. <br></br>
                  <br></br>
                  <div className={styles.titlepopup}>
                    <u>Actif :</u>
                  </div>
                  Emploi avec activité modérée environ 8 heures par jour.{" "}
                  <br></br>
                  <br></br>
                  <div className={styles.titlepopup}>
                    <u>Extremêment actif :</u>
                  </div>{" "}
                  Emploi avec activité modérée ~8 heures par jour + 1 heure de
                  cardio quotidien.
                </div>
              )}
            </div>
            <span className={styles.label}>Objectif</span>
            <div className={styles.sexe}>
              <div className={styles.femme}>
                <label>
                  <input
                    className={styles.checkbox}
                    type="radio"
                    name="caloriesDeficit"
                    value="-500"
                    checked={caloriesDeficit === -500}
                    onChange={handleObjectifChange}
                  />
                  Perte de poids
                </label>
              </div>
              <div className={styles.homme}>
                <label>
                  <input
                    className={styles.checkbox}
                    type="radio"
                    name="caloriesDeficit"
                    value="500"
                    checked={caloriesDeficit === 500}
                    onChange={handleObjectifChange}
                  />
                  Prise de muscle
                </label>
              </div>
              <div className={styles.homme}>
                <label>
                  <input
                    className={styles.checkbox}
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

            <button onClick={() => handleSubmit()} className={styles.btn}>
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
