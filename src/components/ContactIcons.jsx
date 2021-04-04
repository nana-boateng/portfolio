import { getIcons } from "./../util/";

import "./styles/style.css";
import Github from "./icons/GitHub";
import Mail from "./icons/Mail";
import LinkedIn from "./icons/LinkedIn";

export default function ContactIcons() {
  return (
    <div className="flex flex-row text-xl m-3 h-6">
      <button className="mx-2" id="hoverable">
        <div>code</div>
        <div className={`transform transition animate-fade-in-up`} id="show">
          <div className="w-full h-1  bg-black "></div>
          <Github />
        </div>
      </button>
      <button className="mx-2" id="hoverable">
        <div>contact</div>
        <div id="show" className="transform transition animate-fade-in-up">
          <div className="w-full h-1 bg-black"></div>
          <Mail />
        </div>
      </button>
      <button className="mx-2" id="hoverable">
        <div>connect</div>

        <div id="show" className="transform transition animate-fade-in-up">
          <div className="w-full h-1 bg-black"></div>
          <LinkedIn />
        </div>
      </button>
    </div>
  );
}
