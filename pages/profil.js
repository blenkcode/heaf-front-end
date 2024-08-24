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
    <main className="h-lvh bg-diagonal-split flex flex-col xl:flex-row justify-evenly items-center relative ">
      <Header></Header>
      <div className=" w-10/12 h-auto pt-12  ">
        <div className="text-3xl pb-12 ml-3 text-sky-900 font-bold">
          DashBoard
        </div>{" "}
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
