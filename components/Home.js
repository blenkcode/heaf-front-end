import SignUp from "./SignUp";
import Login from "./Login";
import { useState, useEffect } from "react";
import Anim from "./Anim";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader"; // Importer le composant Loader
import React from "react";

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
      {/* Le composant Anim est rendu même pendant le chargement, mais la visibilité est contrôlée */}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <main className="h-lvh bg-gradient-to-tr from-sky-600 to-sky-900 flex flex-col xl:flex-row justify-evenly items-center relative overflow-hidden">
          <div className="flex flex-col sm:flex-row xl:flex-col relative xl:items-start items-center xl-w-fit justify-around z-10 xl:ml-10 ml-0 2xl:ml-0 pt-10 sm:pt-12 xl:pt-0">
            <div className="xl:w-full w-full sm:w-1/2">
              <h1 className="text-7xl flex items-center text-slate-100 font-bold">
                Heaf{" "}
                <a
                  href="https://www.valentin-mor.com/"
                  className="text-slate-200 border-1 border-opacity-55 px-6 py-3 rounded-xl border-slate-300 cursor-pointer hover:bg-sky-800 text-base transition-colors ml-10"
                >
                  Contact
                </a>
              </h1>
              <h2 className="text-2xl sm:text-base md:text-xl  2xl:text4xl mt-10 text-slate-100">
                <FontAwesomeIcon icon={faArrowRight} className="pr-5" />
                Calculez vos besoins nutritionnels
                <div className="mt-10">
                  <FontAwesomeIcon icon={faArrowRight} className="pr-5" />{" "}
                  Suivez nos recommandations.
                </div>
                <div className="mt-10">Observez-vous évoluer 💪</div>
              </h2>
            </div>
            <div className="z-50 flex pt-10 sm:pt-0 xl:pt-10 sm:ml-10 xl:ml-0">
              {currentComponent === "SignUp" ? (
                <SignUp onToggleForm={toggleForm} />
              ) : (
                <Login onToggleForm={toggleForm} />
              )}
            </div>
          </div>
          <div className="w-fit h-fit z-20">
            <Anim onLoad={handleSplineLoad} />
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
