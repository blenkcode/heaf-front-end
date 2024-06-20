import styles from "../styles/Header.module.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/user";

function HeaderLoged({ onClick }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleHome = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logocontainer}>
          <img
            onClick={() => handleHome()}
            className={styles.logo}
            src="logoheaffinal.png"
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
