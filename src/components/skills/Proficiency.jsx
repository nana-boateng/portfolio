import PythonLogo from "./../../assets/icons/Python.svg";
import JavaLogo from "./../../assets/icons/Java.svg";
import HTMLLogo from "./../../assets/icons/HTML5.svg";
import CSSLogo from "./../../assets/icons/CSS.svg";
import JSLogo from "./../../assets/icons/JavaScript.svg";
import ReactLogo from "./../../assets/icons/React.svg";
import BashLogo from "./../../assets/icons/Bash.svg";
import DockerLogo from "./../../assets/icons/Docker.svg";

export default function Proficiency() {
  const style =
    "flex flex-row bg-powder opacity-60 duration-300 text-black transition hover:opacity-100 shadow-lg rounded-md w-max m-3 p-3";

  return (
    <div className="">
      <div className="font-lato text-2xl text-center transition animate-fade-in-right ">
        I am proficient in ...
      </div>
      <ul className="flex flex-wrap">
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={PythonLogo}
            alt="Python Logo"
          />
          Python
        </li>
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={JavaLogo}
            alt="Java Logo"
          />
          Java
        </li>
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={HTMLLogo}
            alt="HTML Logo"
          />
          HTML
        </li>
        <li className={`${style}`}>
          <img className="h-5 w-5 mr-2 mt-0.5 " src={CSSLogo} alt="CSS Logo" />
          CSS
        </li>
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={JSLogo}
            alt="JavaScript Logo"
          />
          JavaScript
        </li>
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={ReactLogo}
            alt="React Logo"
          />
          React
        </li>
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={BashLogo}
            alt="Bash Logo"
          />
          Bash/Zsh
        </li>
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={DockerLogo}
            alt="Docker Logo"
          />
          Docker
        </li>
      </ul>
    </div>
  );
}
