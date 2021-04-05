import Collaboaration from "./Collaboration";

// contexts
import { useGlobalContext } from "./../../contexts/";

export default function Carousel() {
  const { toolTitle } = useGlobalContext();

  return (
    <div>
      <div className="text-center text-xl">{toolTitle}</div>
      <Collaboaration />
    </div>
  );
}
