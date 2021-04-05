import { GitHub, Mail, LinkedIn } from "../icons";

export function Code() {
  return (
    <>
      <div>code</div>
      <div className={`transform transition animate-fade-in-up`} id="show">
        <div className="w-full h-1  bg-black "></div>
        <GitHub />
      </div>
    </>
  );
}

export function Contact() {
  return (
    <>
      <div>contact</div>
      <div id="show" className="transform transition animate-fade-in-up">
        <div className="w-full h-1 bg-black"></div>
        <Mail />
      </div>
    </>
  );
}

export function Connect() {
  return (
    <>
      <div>connect</div>
      <div id="show" className="transform transition animate-fade-in-up">
        <div className="w-full h-1 bg-black"></div>
        <LinkedIn />
      </div>
    </>
  );
}
