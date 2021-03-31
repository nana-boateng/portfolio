import { getIcons } from "./../util/";

export default function Projects({ projects }) {
  return (
    <div className="flex flex-row">
      {Object.keys(projects).map((item) => {
        console.log("item:", projects[item]);

        const title = projects[item].title;
        const description = projects[item].description;
        const stack = projects[item].stack;

        return (
          <div className="w-52 mx-3 min-h-full rounded-md p-2 bg-yellow-200">
            <div className="text-center font-bold text-xl my-3">{title}</div>
            <div className="text-center">{description}</div>
            <div className="flex flex-row justify-evenly mx-auto w-full h-20">
              {stack.map((item) => {
                return getIcons(item) ? getIcons(item) : "";
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
