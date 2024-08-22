import { useState } from "react";
import ProfilData from "../components/ProfilData";
import ProfilGraph from "../components/ProfilGraph";
import ProfilMacro from "../components/ProfilMacro";
import { useRouter } from "next/router";
import React from "react";
function Profil() {
  const router = useRouter();
  const handleExit = () => {
    router.push("/");
  };
  return (
    <main className="h-lvh bg-gradient-to-tr from-sky-600 to-sky-900 flex flex-col xl:flex-row justify-evenly items-center relative ">
      <div className=" w-10/12 h-auto  ">
        {" "}
        <ProfilData />
        <div className="flex">
          {" "}
          <ProfilMacro />
          <ProfilGraph />
        </div>
      </div>
      <div
        className="absolute top-10 text-xl  text-slate-200 border-1 border-slate-200 border-opacity-85 rounded-full cursor-pointer hover:bg-sky-800 p-4 right-10"
        onClick={handleExit}
      >
        Exit
      </div>
    </main>
  );
}

export default Profil;
