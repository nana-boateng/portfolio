import GoLogo from "./../../assets/icons/GoLang.svg";
import GraphQLLogo from "./../../assets/icons/GraphQL.svg";
import LuaLogo from "./../../assets/icons/Lua.svg";

export default function Learning() {
  const style =
    "flex flex-row bg-powder opacity-60 duration-300 text-black hover:opacity-100 shadow-lg rounded-md w-max m-3 p-3";

  return (
    <div className="">
      <div className="font-lato text-2xl text-center align-middle transition delay-1000 animate-fade-in-right ">
        and learning ...
      </div>
      <ul className="flex flex-wrap justify-center">
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={GoLogo}
            alt="GoLang Logo"
          />
          Go{" "}
        </li>
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={GraphQLLogo}
            alt="GraphQL Logo"
          />
          GraphQL
        </li>
        <li className={`${style}`}>
          <img
            className="h-5 w-5 mr-2 mt-0.5 "
            src={LuaLogo}
            alt="LuaLang Logo"
          />
          Lua
        </li>
      </ul>
    </div>
  );
}
