import styles from "../styles/SignUp.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

function SignUp({ onSuccess, onToggleForm }) {
  const dispatch = useDispatch();
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRegister = () => {
    fetch("https://heaf-back-end.vercel.app/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pseudo, password, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ pseudo: pseudo, token: data.token }));
          setPseudo("");
          setEmail("");
          setPassword("");
          onSuccess();
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
          Votre partenaire de confiance pour un mode de vie équilibré.
        </div>{" "}
        <div className={styles.subtitle}>
          Découvrez nos programmes personnalisés pour atteindre vos objectifs de
          santé et de bien-être durable.
          <button className={styles.btnprog} onClick={toggleMenu}>
            <FontAwesomeIcon
              className={`${styles.icon} ${isMenuOpen ? styles.rotate : ""}`}
              icon={faCircleChevronRight}
            />
          </button>
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

      <div className={styles.log}>
        <div className={styles.menu}>
          {" "}
          <div className={styles.btncontainer}>
            {" "}
            <button className={styles.inBtn}> Sign-Up</button>
            <button className={styles.coBtn} onClick={onToggleForm}>
              Login
            </button>
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
          <span className={styles.label}>Adresse mail</span>
          <input
            className={styles.input}
            type="text"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <span className={styles.label}>Mot de passe</span>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className={styles.btn} onClick={handleRegister}>
            Inscription
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
