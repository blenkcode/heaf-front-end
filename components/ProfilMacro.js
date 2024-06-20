import styles from "../styles/ProfilMacro.module.css";
import Header from "./Header";
import SignUp from "./SignUp";
import Form from "./Form";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PieChart from "./PieChart";

function ProfilMacro() {
  const weight = useSelector((state) => state.user.value.weight);
  const caloriesDeficit = useSelector(
    (state) => state.user.value.caloriesDeficit
  );
  const objectif = useSelector((state) => state.user.value.objectif);

  console.log(objectif);
  const [proteines, setProteines] = useState(0);
  const [lipides, setLipides] = useState(0);
  const [glucides, setGlucides] = useState(0);

  useEffect(() => {
    if (caloriesDeficit && weight) {
      const calculateProt = (weight) => {
        return 2 * weight;
      };
      const proteines = calculateProt(weight);
      setProteines(proteines);

      const calculateLip = (objectif) => {
        console.log(objectif);
        const lip = (30 * (objectif / 100)) / 9;
        return Math.round(lip);
      };
      const lipides = calculateLip(objectif);
      setLipides(lipides);

      const calculateGlucides = (objectif, proteines, lipides) => {
        console.log(objectif, proteines, lipides);
        const remainingCalories = objectif - (proteines * 4 + lipides * 9);
        return Math.round(remainingCalories / 4);
      };

      const glucides = calculateGlucides(objectif, proteines, lipides);
      setGlucides(glucides);
    }
  }, [caloriesDeficit, weight, objectif]);

  return (
    <div className={styles.maincontainer}>
      <div className={styles.macro}>
        <div className={styles.proteines}>
          <h3 className={styles.label}>
            Protéines (g): <span className={styles.data}> {proteines} </span>
          </h3>
          <div className={styles.imgcontainer}>
            <img className={styles.image} src="./p.jpeg" alt="Protéines" />
            <div className={styles.overlay}>
              Les protéines sont essentielles pour la construction et la
              réparation des tissus, ainsi que pour le bon fonctionnement du
              système immunitaire.
            </div>
          </div>
        </div>
        <div className={styles.glucides}>
          <h3 className={styles.label}>
            Glucides (g):<span className={styles.data}> {glucides} </span>
          </h3>
          <div className={styles.imgcontainer}>
            <img className={styles.image} src="./g.jpeg" alt="Glucides" />
            <div className={styles.overlay}>
              Les glucides fournissent l'énergie nécessaire pour le
              fonctionnement du corps et du cerveau.
            </div>
          </div>
        </div>
        <div className={styles.lipides}>
          <h3 className={styles.label}>
            Lipides (g): <span className={styles.data}>{lipides} </span>
          </h3>
          <div className={styles.imgcontainer}>
            <img className={styles.image} src="./l.jpeg" alt="Lipides" />
            <div className={styles.overlay}>
              Les lipides (ou graisses) sont indispensables pour l'absorption
              des vitamines, la production d'hormones et la protection des
              organes.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.piechart}>
        {" "}
        <h4 className={styles.h4}> Répartitions Macro-Nutriments</h4>
        <PieChart proteines={proteines} lipides={lipides} glucides={glucides} />
      </div>
    </div>
  );
}

export default ProfilMacro;
