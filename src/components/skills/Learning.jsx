export default function Learning() {
  const style =
    "bg-powder opacity-60 duration-300 text-black hover:opacity-100 shadow-lg rounded-md w-max m-3 p-3";

  return (
    <div className="">
      <div className="font-lato text-2xl text-center align-middle">
        and learning ...
      </div>
      <ul className="flex flex-wrap justify-center">
        <li className={`${style}`}>Go </li>
        <li className={`${style}`}>GraphQL</li>
        <li className={`${style}`}>Apollo</li>
        <li className={`${style}`}>Lua</li>
      </ul>
    </div>
  );
}
