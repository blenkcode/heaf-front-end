import { useState } from "react";
import ProfilData from "../components/ProfilData";
import ProfilGraph from "../components/ProfilGraph";
import ProfilMacro from "../components/ProfilMacro";
import { useRouter } from "next/router";
import Header from "../components/Header";
import React from "react";
function Profil() {
  const router = useRouter();
  const handleExit = () => {
    router.push("/");
  };
  return (
    <main className="h-lvh bg-customBlue from-sky-600 to-sky-900 flex flex-col xl:flex-row justify-evenly items-center relative ">
      <Header></Header>
      <div className=" w-10/12 h-auto pt-12  ">
        {" "}
        <ProfilData />
        <div className="flex">
          {" "}
          <ProfilMacro />
          <ProfilGraph />
        </div>
      </div>
    </main>
  );
}

export default Profil;
