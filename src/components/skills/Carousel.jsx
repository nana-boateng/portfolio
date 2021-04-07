import Collaboaration from "./Collaboration";

// contexts
import { useGlobalContext } from "./../../contexts/";

export default function Carousel() {
  const { toolTitle } = useGlobalContext();

  return (
    <div className="w-full">
      <div className="text-center m-3 text-3xl font-lato duration-300 transform transition animate-fade-in-down">
        {toolTitle}
      </div>
      <Collaboaration />
    </div>
  );
}
