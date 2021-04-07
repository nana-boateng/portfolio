import { GitHub, Mail, LinkedIn } from "../icons";

export function Code() {
  return (
    <a href="https://github.com/nana-boateng/">
      <div>code</div>
      <div className={`transform transition animate-fade-in-up`} id="show">
        <div className="w-full h-1  bg-black "></div>
        <GitHub />
      </div>
    </a>
  );
}

export function Contact() {
  return (
    <a href="mailto:nana.boateng@queensu.ca">
      <div>contact</div>
      <div id="show" className="transform transition animate-fade-in-up">
        <div className="w-full h-1 bg-black"></div>
        <Mail />
      </div>
    </a>
  );
}

export function Connect() {
  return (
    <a href="https://www.linkedin.com/in/nana--boateng/">
      <div>connect</div>
      <div id="show" className="transform transition animate-fade-in-up">
        <div className="w-full h-1 bg-black"></div>
        <LinkedIn />
      </div>
    </a>
  );
}
