import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider(props) {
  const [toolTitle, setToolTitle] = useState("collaboration tools");

  function changeTitle(newTitle) {
    setToolTitle(newTitle);
  }

  return (
    <GlobalContext.Provider value={{ toolTitle, changeTitle }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  const { toolTitle, changeTitle } = useContext(GlobalContext);
  return { toolTitle, changeTitle };
};
