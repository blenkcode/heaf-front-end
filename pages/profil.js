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
    <main className="lg:h-lvh h-fit bg-diagonal-split flex flex-col xl:flex-row justify-evenly items-center relative ">
      <Header></Header>
      <div className=" lg:w-10/12 px-2 lg:px-0 h-auto pt-12 mt-10 lg:mt-0  ">
        <div className="text-3xl pb-12 ml-3 text-sky-900 font-bold">
          DashBoard
        </div>{" "}
        <ProfilData />
        <div className="flex lg:flex-row flex-col">
          {" "}
          <ProfilMacro />
          <ProfilGraph />
        </div>
      </div>
    </main>
  );
}

export default Profil;
