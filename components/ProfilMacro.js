import styles from "../styles/ProfilMacro.module.css";
import Header from "./Header";
import SignUp from "./SignUp";
import Form from "./Form";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PieChart from "./PieChart";

function ProfilMacro() {
  const weight = useSelector((state) => state.user.value.weight);
  const calories = useSelector((state) => state.user.value.calories);
  const [proteines, setProteines] = useState(0);
  const [lipides, setLipides] = useState(0);
  const [glucides, setGlucides] = useState(0);

  useEffect(() => {
    if (calories && weight) {
      const calculateProt = (weight) => {
        return 2 * weight;
      };
      const proteines = calculateProt(weight);
      setProteines(proteines);

      const calculateLip = (calories) => {
        const lip = (30 * (calories / 100)) / 9;
        return Math.round(lip);
      };
      const lipides = calculateLip(calories);
      setLipides(lipides);

      const calculateGlucides = (calories, proteines, lipides) => {
        console.log(calories, proteines, lipides);
        const remainingCalories = calories - (proteines * 4 + lipides * 9);
        return Math.round(remainingCalories / 4);
      };

      const glucides = calculateGlucides(calories, proteines, lipides);
      setGlucides(glucides);
    }
  }, [calories, weight]);

  return (
    <div className={styles.maincontainer}>
      <div className={styles.macro}>
        <div className={styles.proteines}>
          <h3 className={styles.label}>
            Protéines : <span className={styles.data}> {proteines} g</span>
          </h3>
          <div className={styles.imgcontainer}>
            <img className={styles.image} src="./prot.jpeg" alt="Protéines" />
            <div className={styles.overlay}>
              Les protéines sont essentielles pour la construction et la
              réparation des tissus, ainsi que pour le bon fonctionnement du
              système immunitaire.
            </div>
          </div>
        </div>
        <div className={styles.glucides}>
          <h3 className={styles.label}>
            Glucides :<span className={styles.data}> {glucides} g</span>
          </h3>
          <div className={styles.imgcontainer}>
            <img className={styles.image} src="./glu.jpeg" alt="Glucides" />
            <div className={styles.overlay}>
              Les glucides fournissent l'énergie nécessaire pour le
              fonctionnement du corps et du cerveau.
            </div>
          </div>
        </div>
        <div className={styles.lipides}>
          <h3 className={styles.label}>
            Lipides : <span className={styles.data}>{lipides} g </span>
          </h3>
          <div className={styles.imgcontainer}>
            <img className={styles.image} src="./lip.jpeg" alt="Lipides" />
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
        <PieChart proteines={proteines} lipides={lipides} glucides={glucides} />
      </div>
    </div>
  );
}

export default ProfilMacro;
