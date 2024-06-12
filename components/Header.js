import styles from "../styles/Header.module.css";
import React, { useState, useEffect } from "react";

function Header({ onClick }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logocontainer}>
          <img
            className={styles.logo}
            src="logohf.png"
            alt="Description de l'image"
          />
          <h1 className={styles.heaf}>Heaf</h1>
        </div>
        <ul className={styles.list}>
          <li>Acceuil</li>
          <li>Les Piliers Heaf</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
