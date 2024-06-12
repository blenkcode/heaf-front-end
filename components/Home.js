import styles from "../styles/Home.module.css";
import Header from "./Header";
import SignUp from "./SignUp";
import Login from "./Login";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Form from "./Form"; // Importer le composant Form
import { useState } from "react";

function Home() {
  const [currentComponent, setCurrentComponent] = useState("SignUp");

  const toggleForm = () => {
    setCurrentComponent((prev) => (prev === "SignUp" ? "Login" : "SignUp"));
  };

  const handleSignUpSuccess = () => {
    setCurrentComponent("Form");
  };

  return (
    <div>
      <main
        className={`${styles.main} ${
          currentComponent === "SignUp" ? styles.signup : styles.login
        }`}
      >
        <div className={styles.headercontainer}>
          <Header />
        </div>

        <div className={styles.formcontainer}>
          {currentComponent === "SignUp" && (
            <SignUp onToggleForm={toggleForm} onSuccess={handleSignUpSuccess} />
          )}
          {currentComponent === "Login" && <Login onToggleForm={toggleForm} />}
          {currentComponent === "Form" && <Form />}
        </div>
      </main>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default Home;
