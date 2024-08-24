import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };
  return (
    <div className=" absolute bg-sky-900 top-0 border-b-1 border-solid text-slate-200 border-slate-200 w-full h-16 flex items-center justify-end">
      <div className="flex md:w-2/3 w-full lg:w-1/3 h-full items-center justify-between px-12">
        <div
          onClick={handleHome}
          className="hover:text-customBlue3 cursor-pointer transition-colors"
        >
          Acceuil
        </div>
        <a
          href="https://www.valentin-mor.com/"
          className="hover:text-customBlue3 cursor-pointer transition-colors"
        >
          Contact
        </a>
        <a href="https://www.linkedin.com/in/valentin-mor-a03174114/">
          <FontAwesomeIcon
            className="text-2xl  text-zinc-200 transition duration-200 ease-in-out hover:text-customBlue3"
            icon={faLinkedin}
          />
        </a>
        <a href="https://github.com/blenkcode">
          <FontAwesomeIcon
            className="text-2xl  text-zinc-200 transition duration-200 ease-in-out hover:text-customBlue3"
            icon={faGithub}
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
