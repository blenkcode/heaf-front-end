import SignUp from "./SignUp";
import Login from "./Login";
import { useState, useEffect } from "react";
import Anim from "./Anim";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader"; // Importer le composant Loader
import React from "react";
import Header from "./Header";

function Home({}) {
  const [currentComponent, setCurrentComponent] = useState("SignUp");
  const [isLoading, setIsLoading] = useState(true);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const toggleForm = () => {
    setCurrentComponent((prev) => (prev === "SignUp" ? "Login" : "SignUp"));
  };

  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
  };

  useEffect(() => {
    if (isSplineLoaded) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Optionnel : un petit délai pour une transition fluide
    }
  }, [isSplineLoaded]);

  return (
    <>
      {isLoading && <Loader />}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Utilisation de Flexbox pour centrer verticalement et horizontalement */}
        <main className="min-h-screen  flex flex-col xl:flex-row justify-center items-center text-sky-900 bg-diagonal-split relative overflow-x-hidden">
          <Header />

          <div className="flex flex-col sm:flex-row  relative items-center justify-around z-10 pt-24 sm:pt-12 xl:pt-0  2xl:w-1/2 xl:w-2/3 lg:w-4/5">
            <div className="xl:w-full relative w-full sm:w-1/2 px-10 lg:px-0 text-center xl:text-left ">
              <div className="w-144 h-144 lg:visible invisible absolute -top-32 -left-32 rounded-full border-8 border-sky-900 z-10"></div>
              <h1 className="lg:text-7xl text-3xl flex items-center justify-center lg:justify-start font-bold">
                Heaf{" "}
                <a
                  href="https://www.valentin-mor.com/"
                  className=" border-1 border-opacity-55 px-6 py-3 lg:text-xl text-base rounded-xl border-sky-900 cursor-pointer hover:bg-sky-900 hover:border-slate-200 hover:text-slate-200 text-base transition-colors ml-10 z-50"
                >
                  Contact
                </a>
              </h1>
              <h2 className="lg:text-xl sm:text-base md:text-xl text-sm   lg:mt-10 mt-5">
                <FontAwesomeIcon icon={faArrowRight} className="lg:pr-5 pr-2" />
                Calculez vos besoins nutritionnels
                <div className="lg:mt-10 mt-5">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="lg:pr-5 pr-2"
                  />
                  Suivez nos recommandations.
                </div>
                <div className="lg:mt-10 mt-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="lg:pr-5 pr-2"
                  />
                  Observez-vous évoluer 💪
                </div>
              </h2>
            </div>
            <div className="z-50 flex pt-10 sm:pt-0 xl:pt-10 sm:ml-10 xl:ml-0 ">
              {currentComponent === "SignUp" ? (
                <SignUp onToggleForm={toggleForm} />
              ) : (
                <Login onToggleForm={toggleForm} />
              )}
            </div>
          </div>
          {/* <div className="w-fit h-fit z-20">
            <Anim onLoad={handleSplineLoad} />
          </div> */}
        </main>
      </div>
    </>
  );
}

export default Home;
