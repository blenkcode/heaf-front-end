import styles from "../styles/Home.module.css";
import Header from "./Header";
import SignUp from "./SignUp";
import Login from "./Login";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Form from "./Form"; // Importer le composant Form
import { useState, useRef, useEffect } from "react";

function Home() {
  const [currentComponent, setCurrentComponent] = useState("SignUp");

  const toggleForm = () => {
    setCurrentComponent((prev) => (prev === "SignUp" ? "Login" : "SignUp"));
  };

  const handleSignUpSuccess = () => {
    setCurrentComponent("Form");
  };
  const [head, setHead] = useState(false);
  const footerRef = useRef(null);
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        setHead(true);
      } else {
        setHead(false);
      }
      lastScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <main
        className={`${styles.main} ${
          currentComponent === "SignUp" ? styles.signup : styles.login
        }`}
      >
        <div className={head ? styles.headershow : styles.headercontainer}>
          <Header onClick={scrollToFooter} />
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
