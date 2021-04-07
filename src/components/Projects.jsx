import { getIcons } from "./../util/";

export default function Projects({ projects }) {
  return (
    <div className="flex flex-row mx-auto my-16 ">
      {Object.keys(projects).map((item) => {
        console.log("item:", projects[item]);

        const title = projects[item].title;
        const description = projects[item].description;
        const stack = projects[item].stack;

        return (
          <div
            className={`flex flex-col justify-between bg-yellow-200 w-52 mx-3 min-h-full rounded-md p-2 transform transition duration-200 hover:bg-yellow-300 hover:scale-105 hover:-translate-y-2`}
          >
            <div className="text-center font-bold text-xl">{title}</div>
            <div className="text-center my-6">{description}</div>
            <div className="flex flex-row justify-evenly my-3">
              {stack.map((item) => {
                return (
                  getIcons(item) && (
                    <div className="h-6 w-6 ">{getIcons(item)}</div>
                  )
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
