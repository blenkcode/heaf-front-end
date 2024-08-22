import styles from "../styles/Header.module.css";
import React, { useState, useEffect } from "react";

function Header({ onClick }) {
  return (
    <div className="w-full fixed top-0 left-0 flex h-16 bg-sky-800 items-center ">
      <div className={styles.logocontainer}>
        <img
          className={styles.logo}
          src="logoheaffinal.png"
          alt="Description de l'image"
        />
      </div>
    </div>
  );
}

export default Header;
