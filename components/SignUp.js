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
    <div className=" w-full h-full  bg-opacity-35  text-sky-900 flex flex-col items-center justify-center lg:pt-8    ">
      <div className="text-black lg:text-xl text-sm flex-col flex  w-full items-center justify-center ">
        <div className="lg:mb-10 mb-5 flex flex-col justify-around ">
          {" "}
          <input
            className="px-5 lg:py-4 py-3  sm:py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-sky-900 border-1 placeholder-opacity-50 border-sky-900 text-sky-900  border-opacity-100 lg:w-80 w-72 "
            type="text"
            placeholder="Pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            onClick={handlePseudoClick}
          />
          {userError && <div className="error2">L'utilisateur existe déjà</div>}
        </div>
        <div className="lg:mb-10 mb-5 flex flex-col justify-around">
          {" "}
          <input
            className="px-5 lg:py-4 py-3  sm:py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-sky-900 border-1 placeholder-opacity-50 border-sky-900 text-sky-900  border-opacity-100 lg:w-80 w-72 "
            type="text"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onClick={handlePseudoClick}
          />
          {emailError && <div className="error">Invalid email address</div>}
        </div>
        <div className="lg:mb-10 mb-5 flex flex-col justify-around">
          {" "}
          <input
            className="px-5 lg:py-4 py-3  sm:py-2 rounded-xl bg-slate-100 bg-opacity-0  placeholder-sky-900 border-1 placeholder-opacity-50 border-sky-900 text-sky-900  border-opacity-100 lg:w-80 w-72 "
            type="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className=" flex justify-start items-center">
          <button
            className="px-8 py-2 rounded-xl bg-opacity-80 text-sky-900  border-1 border-sky-900 border-opacity-90 hover:bg-sky-900 hover:border-slate-200 hover:text-slate-200 transition-colors "
            onClick={handleRegister}
          >
            Inscription
          </button>
          <div
            onClick={onToggleForm}
            className=" text-base ml-8 text-sky-900 cursor-pointer"
          >
            Déjà un compte ?
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
