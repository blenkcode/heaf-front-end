import styles from "../styles/Header.module.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function HeaderLoged({ onClick }) {
  const router = useRouter();
  const handleHome = () => {
    router.push("/index");
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logocontainer}>
          <img
            className={styles.logo}
            src="logoheafff.jpeg"
            alt="Description de l'image"
          />
          <h1 onClick={() => handleHome()} className={styles.heaf}>
            Heaf
          </h1>
        </div>
        <ul className={styles.list}>
          <li>Dash-Board</li>
          <li>Nutrition</li>
          <li>Sports</li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderLoged;
