import styles from "../styles/SignUp.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loginn } from "../reducers/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

function Login({ onToggleForm }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleConnexion = () => {
    fetch("https://heaf-back-end.vercel.app/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pseudo, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log(data);
          dispatch(
            loginn({
              pseudo: data.data.pseudo,
              token: data.data.token,
              calories: data.data.calories,
              BMR: data.data.BMR,
              TDEE: data.data.TDEE,
              age: data.data.age,
            })
          );

          router.push("/profil");
        }
      });
  };
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.maincontainer}>
      <div className={styles.contentleft}>
        <div className={styles.bienvenue}>
          <div className={styles.blurBackground}></div>
          Bienvenue sur <div className={styles.heaf}> Heaf</div>{" "}
        </div>
        <br></br>
        <div className={styles.subTitle}>
          Votre partenaire santé pour un mode de vie équilibré.
          <br></br>
          <br></br>
          <div className={styles.gimmick}>
            Calculez vos besoins nutrionionels, suivez nos recomandations
            <br></br>
            <br></br>
            Observez-vous évoluer.
          </div>
        </div>{" "}
        <div className={styles.subtitle}>
          Découvrez nos programmes personnalisés.
          <FontAwesomeIcon
            onClick={toggleMenu}
            className={`${styles.icon} ${isMenuOpen ? styles.rotate : ""}`}
            icon={faCircleChevronRight}
          />
          <div
            className={`${styles.dropdownMenu} ${
              isMenuOpen ? styles.show : ""
            }`}
          >
            <b>Perte de Poids :</b> <br></br>Créez un déficit calorique avec des
            aliments nutritifs et faibles en calories. Maintenez une haute
            teneur en protéines pour préserver la masse musculaire. <br></br>
            <br></br>
            <b>Prise de Muscle :</b> <br></br>Augmentez votre apport calorique
            avec des protéines élevées pour la croissance musculaire. Consommez
            des glucides pour l'énergie et des graisses saines pour l'équilibre
            hormonal.<br></br>
            <br></br> <b>Maintien :</b> <br></br> Équilibrez l'apport calorique
            avec la dépense énergétique pour maintenir un poids stable. Assurez
            un bon équilibre entre protéines, glucides et graisses.
          </div>
        </div>
      </div>
      <div className={styles.space}></div>
      <div className={styles.log}>
        <div className={styles.menu}>
          {" "}
          <div className={styles.btncontainer}>
            {" "}
            <button className={styles.inBtn} onClick={onToggleForm}>
              Sign-Up
            </button>
            <button className={styles.coBtn}>Login</button>
          </div>
        </div>
        <div className={styles.inscription}>
          <span className={styles.label}>Pseudo</span>
          <input
            className={styles.input}
            type="text"
            placeholder="ex: John Doe"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          ></input>

          <span className={styles.label}>Mot de passe</span>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className={styles.btn} onClick={handleConnexion}>
            Connexion
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
