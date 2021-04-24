import NodeLogo from "./../../assets/icons/NodeJS.svg";
import ExpressLogo from "./../../assets/icons/Express.svg";
import FastifyLogo from "./../../assets/icons/fastify.png";
import NextLogo from "./../../assets/icons/nextJS.png";
import MongoLogo from "./../../assets/icons/MongoDB.svg";

export default function Familiarity() {
  const style =
    "flex flex-row bg-powder opacity-60 duration-300 text-black transition hover:opacity-100 shadow-lg rounded-md w-max m-3 p-3";

  return (
    <div className="">
      <div className="font-lato text-2xl text-center transition delay-1000 animate-fade-in-left ">
        familiar with ...
      </div>
      <ul className="flex flex-wrap justify-center">
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={NodeLogo}
            alt="Node Logo"
          />
          NodeJS
        </li>
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={ExpressLogo}
            alt="ExpressJS Logo"
          />
          ExpressJS
        </li>
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={FastifyLogo}
            alt="Fastify Logo"
          />
          Fastify
        </li>
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={NextLogo}
            alt="NextJS Logo"
          />
          NextJS
        </li>
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={MongoLogo}
            alt="MongoDB Logo"
          />
          MongoDB
        </li>
      </ul>
    </div>
  );
}
