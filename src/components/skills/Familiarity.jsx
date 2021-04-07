export default function Familiarity() {
  const style =
    "bg-powder opacity-60 duration-300 text-black transition hover:opacity-100 shadow-lg rounded-md w-max m-3 p-3";

  return (
    <div className="">
      <div className="font-lato text-2xl text-center transition delay-1000 animate-fade-in-left ">
        familiar with ...
      </div>
      <ul className="flex flex-wrap justify-center">
        <li className={`${style}`}>NodeJS</li>
        <li className={`${style}`}>ExpressJS</li>
        <li className={`${style}`}>Fastify</li>
        <li className={`${style}`}>NextJS</li>
        <li className={`${style}`}>Redux</li>
        <li className={`${style}`}>MongoDB</li>
      </ul>
    </div>
  );
}
