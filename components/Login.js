import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loginn } from "../reducers/user";
import React from "react";

function Login({ onToggleForm }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const handleConnexion = () => {
    fetch("https://heaf-back-end.vercel.app/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pseudo, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log(data);
          dispatch(
            loginn({
              pseudo: data.data.pseudo,
              token: data.data.token,
              calories: data.data.calories,
              BMR: data.data.BMR,
              TDEE: data.data.TDEE,
              age: data.data.age,
            })
          );

          router.push("/profil");
        }
      });
  };

  return (
    <div className=" w-full h-full  bg-opacity-35  flex flex-col pt-8    ">
      <div className="text-black text-xl flex-col   w-full ">
        <div className="mb-10 flex flex-col justify-around text-slate-200">
          {" "}
          <input
            className="px-5 py-4  w-80 sm:py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-zinc-100 border-1 placeholder-opacity-50 border-zinc-200 border-opacity-0 opacity-0"
            type="text"
            placeholder="Pseudo"
          />
        </div>
        <div className="mb-10 flex flex-col justify-around text-slate-200">
          {" "}
          <input
            className="px-5 py-4  w-80 sm:py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-zinc-100 border-1 placeholder-opacity-50 border-zinc-200 border-opacity-70"
            type="text"
            placeholder="Pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
        </div>

        <div className="mb-10 flex flex-col justify-around w-80">
          {" "}
          <input
            className="px-5 py-4  sm:py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-zinc-100 border-1 placeholder-opacity-50 border-zinc-200 border-opacity-70"
            type="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className=" flex justify-start items-center ">
          <button
            className="px-8 py-2 rounded-xl bg-opacity-80  text-zinc-100 border-1 border-zinc-200 border-opacity-90 hover:bg-sky-800 transition-colors "
            onClick={handleConnexion}
          >
            Connexion
          </button>
          <div
            onClick={onToggleForm}
            className="text-slate-200 text-base ml-10 cursor-pointer"
          >
            Premiere fois ?
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
