import styles from "../styles/Profil.module.css";
import HeaderLoged from "../components/HeaderLoged";

import { useState } from "react";
import ProfilData from "../components/ProfilData";
import ProfilGraph from "../components/ProfilGraph";
import ProfilMacro from "../components/ProfilMacro";

function Profil() {
  const [showSignUp, setShowSignUp] = useState(true);

  const handleSignUpSuccess = () => {
    setShowSignUp(false);
  };
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.headercontainer}>
          {" "}
          <HeaderLoged />
        </div>

        <div className={styles.content}>
          <div className={styles.contentleft}>
            <div className={styles.profilData}>
              <ProfilData />
            </div>
          </div>

          <div className={styles.contentright}>
            <div className={styles.profilMacro}>
              <ProfilMacro />
            </div>
            <div className={styles.profilGraph}>
              <ProfilGraph />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profil;
