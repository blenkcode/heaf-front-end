import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import React from "react";

import { useRouter } from "next/router";

function SignUp({ onToggleForm }) {
  const router = useRouter();

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  const [emailError, setEmailError] = useState(false);
  const [userError, setUserError] = useState(false);

  const dispatch = useDispatch();
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!EMAIL_REGEX.test(email)) {
      setEmailError(true);
      return;
    }
    fetch("https://heaf-back-end.vercel.app/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pseudo, password, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ pseudo: pseudo, token: data.token }));
          setPseudo("");
          setEmail("");
          setPassword("");
          router.push("./form");
        } else {
          setUserError(true);
        }
      });
  };

  const handlePseudoClick = () => {
    setUserError(false);
    setEmailError(false);
  };
  return (
    <div className=" w-full h-full  bg-opacity-35  flex flex-col pt-8    ">
      <div className="text-black text-xl flex-col   w-full ">
        <div className="mb-10 flex flex-col justify-around text-slate-200">
          {" "}
          <input
            className="px-5 py-4  sm:py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-zinc-100 border-1 placeholder-opacity-50 border-zinc-200 border-opacity-70 w-80"
            type="text"
            placeholder="Pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            onClick={handlePseudoClick}
          />
          {userError && <div className="error2">L'utilisateur existe déjà</div>}
        </div>
        <div className="mb-10 flex flex-col justify-around">
          {" "}
          <input
            className="px-5 py-4 text-slate-200 sm:py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-zinc-100 border-1 placeholder-opacity-50 border-zinc-200 border-opacity-70 w-80"
            type="text"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onClick={handlePseudoClick}
          />
          {emailError && <div className="error">Invalid email address</div>}
        </div>
        <div className="mb-10 flex flex-col justify-around">
          {" "}
          <input
            className="px-5 py-4  sm:py-2 text-slate-200 rounded-xl bg-slate-100 bg-opacity-0  placeholder-zinc-100 border-1 placeholder-opacity-50 border-zinc-200 border-opacity-70 w-80"
            type="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className=" flex justify-start items-center">
          <button
            className="px-8 py-2 rounded-xl bg-opacity-80  text-zinc-100 border-1 border-zinc-200 border-opacity-90 hover:bg-sky-800 transition-colors "
            onClick={handleRegister}
          >
            Inscription
          </button>
          <div
            onClick={onToggleForm}
            className="text-slate-200 text-base ml-8 cursor-pointer"
          >
            Déjà un compte ?
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
