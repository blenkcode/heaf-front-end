import styles from "../styles/Section1.module.css";

import { useState } from "react";

function Section1() {
  const [hovered, setHovered] = useState(null);
  const [hovered2, setHovered2] = useState(null);
  const [hovered3, setHovered3] = useState(null);

  const isAnyHovered = hovered || hovered2 || hovered3;

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.section1}></div>
        <div className={styles.cardsContainer}>
          <div className={styles.titleContainer}>
            {" "}
            <h2 className={styles.titleMain}>Les Pilliers Heaf</h2>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.img1Container}>
              {" "}
              <img
                className={`${styles.image} ${
                  hovered === 1 ? styles.hovered : ""
                } ${isAnyHovered && hovered !== 1 ? styles.notHovered : ""}`}
                src="./nutrition.jpeg"
                alt="nutrition"
              />
            </div>
            <div className={styles.img2Container}>
              {" "}
              <img
                className={`${styles.image} ${
                  hovered2 === 1 ? styles.hovered : ""
                } ${isAnyHovered && hovered2 !== 1 ? styles.notHovered : ""}`}
                src="./sport.jpeg"
                alt="sport"
              />
            </div>
            <div className={styles.img3Container}>
              {" "}
              <img
                className={`${styles.image} ${
                  hovered3 === 1 ? styles.hovered : ""
                } ${isAnyHovered && hovered3 !== 1 ? styles.notHovered : ""}`}
                src="./adherence.jpeg"
                alt="adherence"
              />
            </div>
          </div>
          <div className={styles.text1Container}>
            <div
              className={styles.contentContainerMain}
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={styles.titleContainers}>
                {" "}
                <div className={styles.title}>Nutrition</div>
                <span
                  className={`${styles.line1} ${
                    hovered === 1 ? styles.hoveredLine1 : ""
                  } `}
                >
                  {" "}
                </span>
              </div>

              <div className={styles.contentContainer}>
                <div className={styles.content}>
                  <p>
                    L'alimentation est le{" "}
                    <span className={styles.colored}>fondement </span>de tout
                    plan de perte de poids, de construction musculaire ou de
                    préparation physique.<br></br>
                    <br></br> Une nutrition{" "}
                    <span className={styles.colored}>adéquate </span>fournit les
                    nutriments essentiels nécessaires pour alimenter{" "}
                    <span className={styles.colored}>notre corps</span> ,
                    favoriser la récupération et optimiser les performances.
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className={styles.text2Container}>
            <div
              className={styles.contentContainerMain}
              onMouseEnter={() => setHovered2(1)}
              onMouseLeave={() => setHovered2(null)}
            >
              {" "}
              <div className={styles.titleContainers}>
                {" "}
                <div className={styles.title}>Activité Physique</div>
                <span
                  className={`${styles.line2} ${
                    hovered2 === 1 ? styles.hoveredLine2 : ""
                  } `}
                >
                  {" "}
                </span>
              </div>
              <div className={styles.contentContainer}>
                <div className={styles.content}>
                  <p>
                    En s'engageant dans des{" "}
                    <span className={styles.colored}>exercices</span> réguliers
                    et ciblés, on favorise non seulement une meilleure condition
                    physique, mais aussi une meilleure{" "}
                    <span className={styles.colored}>santé mentale</span> et
                    <span className={styles.colored}> émotionnelle</span>.
                    <br></br> <br></br>Ce qui est fondamental pour atteindre des
                    résultats <span className={styles.colored}>durables</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className={styles.text3Container}>
            <div
              className={styles.contentContainerMain}
              onMouseEnter={() => setHovered3(1)}
              onMouseLeave={() => setHovered3(null)}
            >
              {" "}
              <div className={styles.titleContainers}>
                {" "}
                <div className={styles.title}>Adhérence</div>
                <span
                  className={`${styles.line3} ${
                    hovered3 === 1 ? styles.hoveredLine3 : ""
                  } `}
                >
                  {" "}
                </span>
              </div>
              <div className={styles.contentContainer}>
                <div className={styles.content}>
                  <p>
                    C'est la capacité à{" "}
                    <span className={styles.colored}>maintenir</span> des
                    habitudes de vie à long terme. L'adhérence va bien au-delà
                    de la simple discipline, elle repose sur{" "}
                    <span className={styles.colored}>le plaisir</span> et
                    l'engagement{" "}
                    <span className={styles.colored}>personnel</span> envers ces
                    habitudes. <br></br> <br></br>En fin de compte,{" "}
                    <span className={styles.colored}>aimer </span>ce que l'on
                    fait est la clé pour transformer des efforts temporaires en
                    un mode de vie{" "}
                    <span className={styles.colored}>épanouissant</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Section1;
