import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PieChart from "./PieChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faDna } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Anim2 from "./Anim2";

function ProfilMacro() {
  const weight = useSelector((state) => state.user.value.weight);
  const caloriesDeficit = useSelector(
    (state) => state.user.value.caloriesDeficit
  );
  const objectif = useSelector((state) => state.user.value.objectif);

  console.log(objectif);
  const [proteines, setProteines] = useState(0);
  const [lipides, setLipides] = useState(0);
  const [glucides, setGlucides] = useState(0);

  useEffect(() => {
    if (caloriesDeficit && weight) {
      const calculateProt = (weight) => {
        return 2 * weight;
      };
      const proteines = calculateProt(weight);
      setProteines(proteines);

      const calculateLip = (objectif) => {
        console.log(objectif);
        const lip = (30 * (objectif / 100)) / 9;
        return Math.round(lip);
      };
      const lipides = calculateLip(objectif);
      setLipides(lipides);

      const calculateGlucides = (objectif, proteines, lipides) => {
        console.log(objectif, proteines, lipides);
        const remainingCalories = objectif - (proteines * 4 + lipides * 9);
        return Math.round(remainingCalories / 4);
      };

      const glucides = calculateGlucides(objectif, proteines, lipides);
      setGlucides(glucides);
    }
  }, [caloriesDeficit, weight, objectif]);

  const [prot, setProt] = useState(false);
  const [glu, setGlu] = useState(false);
  const [lip, setLip] = useState(false);
  const [overlay, setOverlay] = useState(true);

  const handleProt = () => {
    setLip(false);
    setGlu(false);
    setProt(true);
    setOverlay(false);
  };
  const handleGlu = () => {
    setLip(false);
    setProt(false);
    setGlu(true);
    setOverlay(false);
  };
  const handleLip = () => {
    setGlu(false);
    setProt(false);
    setLip(true);
    setOverlay(false);
  };

  return (
    <div className="text-slate-200 lg:w-1/2 w-full bg-sky-900  pl-10 rounded-xl ">
      <div className="flex-col">
        <div className="text-2xl mb-8 mt-8 ">Macro-Nutriments</div>
        <div className="flex lg:flex-row flex-col">
          {" "}
          <div className="lg:w-1/2 w-full">
            <span
              onClick={handleProt}
              className="border-slate-300 border-1 border-opacity-80 rounded-xl flex justify-center   w-10/12  hover:bg-customBlue2 transition-colors  mr-8 flex-col items-start py-2 pl-4 mb-8 cursor-pointer"
            >
              <div className="flex justify-between w-full pr-2">
                Protéines <FontAwesomeIcon className="p-1" icon={faDna} />
              </div>{" "}
              <span className="text-3xl mt-2">
                {" "}
                {proteines} <span className="text-2xl">g</span>{" "}
              </span>
            </span>
            <span
              onClick={handleGlu}
              className="border-slate-300 border-1 border-opacity-80 rounded-xl flex justify-center  w-10/12  mr-8 flex-col  hover:bg-customBlue2 transition-colors  items-start py-2 pl-4 mb-8 cursor-pointer"
            >
              <div className="flex justify-between w-full pr-2">
                Glucides <FontAwesomeIcon className="p-1" icon={faDna} />
              </div>{" "}
              <span className="text-3xl mt-2">
                {" "}
                {glucides} <span className="text-2xl">g</span>{" "}
              </span>
            </span>
            <span
              onClick={handleLip}
              className="border-slate-300 border-1 border-opacity-80 rounded-xl flex justify-center w-10/12   mr-8 flex-col  hover:bg-customBlue2 transition-colors  items-start py-2 pl-4 mb-8 cursor-pointer"
            >
              <div className="flex justify-between w-full pr-2">
                Lipides
                <FontAwesomeIcon className="p-1" icon={faDna} />
              </div>{" "}
              <span className="text-3xl mt-2">
                {" "}
                {lipides} <span className="text-2xl">g</span>{" "}
              </span>
            </span>
          </div>
          <div className="lg:w-1/2 flex lg:mt-0 mt-48 items-center flex-col justify-end relative">
            <div className="absolute lg:-translate-x-5 -translate-x-7 lg:-top-10 -top-48">
              {" "}
              <Anim2></Anim2>
            </div>{" "}
            <div className="w-full mr-10 h-48 mb-8   border-1 border-slate-200 border-opacity-40 text-base  rounded-xl">
              {overlay && (
                <div className="p-5">
                  Les macronutriments sont les nutriments essentiels dont notre
                  corps a besoin en grande quantité pour fonctionner
                  correctement.
                </div>
              )}
              {prot && (
                <div className="p-5">
                  Les protéines sont essentielles pour la construction et la
                  réparation des tissus, ainsi que pour le bon fonctionnement du
                  système immunitaire.
                </div>
              )}
              {glu && (
                <div className="p-5">
                  Les glucides fournissent l'énergie nécessaire pour le
                  fonctionnement du corps et du cerveau, ce sont vos meilleurs
                  amis pour l'entrainement.
                </div>
              )}
              {lip && (
                <div className="p-5">
                  Les lipides (ou graisses) sont indispensables pour
                  l'absorption des vitamines, la production d'hormones et la
                  protection des organes.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilMacro;
