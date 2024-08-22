function Section1() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.section1}></div>
        <div className={styles.cardsContainer}>
          <div className={styles.cards1}>
            <div className={styles.title}>Nutrition</div>
            <div className={styles.contentContainer}>
              <div className={styles.content}>
                <p>
                  L'alimentation est le{" "}
                  <span className={styles.colored}>fondement </span>de tout plan
                  de perte de poids, de construction musculaire ou de
                  préparation physique.<br></br> <br></br> Une nutrition{" "}
                  <span className={styles.colored}>adéquate </span>fournit les
                  nutriments essentiels nécessaires pour alimenter{" "}
                  <span className={styles.colored}>notre corps</span> ,
                  favoriser la récupération et optimiser les performances.
                </p>
              </div>
              <img
                className={styles.image}
                src="./nutrition.jpeg"
                alt="nutrition"
              />
            </div>
          </div>
          <div className={styles.cards1}>
            <div className={styles.title}>Actvité Physique</div>
            <div className={styles.contentContainer}>
              <div className={styles.content}>
                <p>
                  En s'engageant dans des{" "}
                  <span className={styles.colored}>exercices</span> réguliers et
                  ciblés, on favorise non seulement une meilleure condition
                  physique, mais aussi une meilleure{" "}
                  <span className={styles.colored}>santé mentale</span> et
                  <span className={styles.colored}> émotionnelle</span>.
                  <br></br> <br></br> Ce qui est fondamental pour atteindre des
                  résultats <span className={styles.colored}>durables</span>.
                </p>
              </div>
              <img className={styles.image} src="./sport.jpeg" alt="sport" />
            </div>
          </div>
          <div className={styles.cards1}>
            <div className={styles.title}>Adhérence</div>
            <div className={styles.contentContainer}>
              <div className={styles.content}>
                <p>
                  C'est la capacité à{" "}
                  <span className={styles.colored}>maintenir</span> des
                  habitudes de vie à long terme. L'adhérence va bien au-delà de
                  la simple discipline, elle repose sur{" "}
                  <span className={styles.colored}>le plaisir</span> et
                  l'engagement <span className={styles.colored}>personnel</span>{" "}
                  envers ces habitudes. <br></br> <br></br>En fin de compte,{" "}
                  <span className={styles.colored}>aimer </span>ce que l'on fait
                  est la clé pour transformer des efforts temporaires en un mode
                  de vie <span className={styles.colored}>épanouissant</span>.
                </p>
              </div>
              <img
                className={styles.image}
                src="./adherence.jpeg"
                alt="adherence"
              />
            </div>
          </div>
        </div>
        <div className={styles.paragrapheContainer}>
          <p className={styles.paragraphe}>
            Pour atteindre et maintenir des objectifs de santé et de condition
            physique, trois éléments essentiels doivent être intégrés : la
            <span className={styles.colored2}> nutrition</span>,{" "}
            <span className={styles.colored2}>
              l'activité physique et l'adhérence.
            </span>{" "}
            <br></br> <br></br> La nutrition joue un{" "}
            <span className={styles.colored2}> rôle central </span> dans la
            perte de poids, la construction musculaire et la préparation
            physique pour une compétition. Une alimentation{" "}
            <span className={styles.colored2}> équilibrée</span> et adaptée aux
            besoins individuels fournit les nutriments nécessaires pour
            <span className={styles.colored2}> alimenter le corps</span> ,
            favoriser la <span className={styles.colored2}> récupération</span>{" "}
            , et optimiser les{" "}
            <span className={styles.colored2}> performances</span>. <br></br>{" "}
            <br></br> Que ce soit pour créer un déficit calorique pour{" "}
            <span className={styles.colored2}>perdre du poids</span>, augmenter
            l'apport en protéines pour{" "}
            <span className={styles.colored2}>construire du muscle</span>, ou
            ajuster les macros pour une compétition, une nutrition appropriée
            est cruciale.
          </p>
          <p className={styles.paragraphe}>
            Trouver du plaisir dans ce que l'on mange et dans l'exercice que
            l'on pratique est essentiel pour transformer des efforts temporaires
            en <span className={styles.colored2}>habitudes durables</span> .{" "}
            <br></br> <br></br> Aimer ses repas et ses activités physiques
            augmente la probabilité de maintenir ces habitudes, conduisant à des
            résultats durables et à une
            <span className={styles.colored2}>
              {" "}
              meilleure qualité de vie
            </span> . <br></br> <br></br> En conclusion,{" "}
            <span className={styles.colored2}>la synergie</span> entre une
            nutrition adéquate, une activité physique régulière et une adhérence
            solide crée un mode de vie sain, permettant d'atteindre et de
            maintenir des objectifs de condition physique de manière durable.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Section1;
