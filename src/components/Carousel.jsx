import { FaGit, FaJira } from "react-icons/fa";
import { GrNode } from "react-icons/gr";

export default function Carousel() {
  return (
    <div className="flex flex-row justify-evenly w-1/3 mx-auto">
      <FaGit className={`h-10 w-10`} />
      <FaJira className={`h-10 w-10`} />
      <GrNode className={`h-10 w-10`} />
    </div>
  );
}
