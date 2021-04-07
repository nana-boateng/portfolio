export default function Proficiency() {
  const style =
    "bg-powder opacity-60 duration-300 text-black transition hover:opacity-100 shadow-lg rounded-md w-max m-3 p-3";

  return (
    <div className="">
      <div className="font-lato text-2xl text-center transition animate-fade-in-right ">
        I am proficient in ...
      </div>
      <ul className="flex flex-wrap">
        <li className={`${style}`}>Python</li>
        <li className={`${style}`}>Java</li>
        <li className={`${style}`}>HTML</li>
        <li className={`${style}`}>CSS</li>
        <li className={`${style}`}>JavaScript</li>
        <li className={`${style}`}>React</li>
        <li className={`${style}`}>Bash/Zsh</li>
        <li className={`${style}`}>Docker</li>
      </ul>
    </div>
  );
}
