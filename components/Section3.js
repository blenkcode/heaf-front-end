import styles from "../styles/Section3.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function Section3() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <div className={styles.title}>Heaf</div>
            <span className={styles.content}>à propos de nous</span>
            <span className={styles.content}>Conditions</span>
            <span className={styles.content}>Nos promesses client</span>
            <span className={styles.content}>Partenariats et affiliations</span>
          </div>
          <div className={styles.middleSection}>
            <div className={styles.title}>Service Clientèle</div>
            <span className={styles.content}>FAQ</span>
            <span className={styles.content}>Politique de Confidentialité</span>
            <span className={styles.content}>Cookies</span>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.title}>Contact</div>
            <span className={styles.content}>
              Vous avez des questions ou suggestion ?
            </span>
            <span className={styles.content}>
              <b>
                <u>valentinmor.pro@gmail.com</u>
              </b>
            </span>
            <span className={styles.content}>
              Je suis là pour vous : <b>+33631817232</b>
            </span>
            <span className={styles.content}>Lundi - Vendredi : 8am -18pm</span>
            <span className={styles.contentIcon}>
              <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
              <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
              <FontAwesomeIcon className={styles.icon} icon={faSquareTwitter} />
            </span>
          </div>
          <div className={styles.disclamerSection}>
            <div className={styles.title}>Disclamer</div>
            <span className={styles.content}>
              Heaf ne conseille en aucun cas votre façon de vous alimenter. Les
              informations nutritionelles sont générées pour le divertissement
              et se dédouane de toute responsabilité.
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Section3;
