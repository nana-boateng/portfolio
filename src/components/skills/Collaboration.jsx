import {
  SkillsBitbucket,
  SkillsGit,
  SkillsGitHub,
  SkillsJira,
  SkillsTrello,
} from "../icons";

import { useGlobalContext } from "./../../contexts/";

export default function Collaboration() {
  const { changeTitle } = useGlobalContext();

  return (
    <div
      className={`flex flex-row p-3 justify-evenly h-max w-full rounded-xl shadow-md mx-auto bg-indigo`}
    >
      <button
        onMouseOver={() => changeTitle("Git")}
        onMouseOut={() => changeTitle("collaboration tools")}
      >
        <SkillsGit
          style={`m-3 shadow-sm transition transform duration-300 hover:scale-110`}
        />
      </button>
      <button
        onMouseOver={() => changeTitle("Jira")}
        onMouseOut={() => changeTitle("collaboration tools")}
      >
        <SkillsJira
          style={`m-3 shadow-sm transition transform duration-300 hover:scale-110`}
        />
      </button>
      <button
        onMouseOver={() => changeTitle("Github")}
        onMouseOut={() => changeTitle("collaboration tools")}
      >
        <SkillsGitHub
          style={`m-3 shadow-sm transition transform duration-300 hover:scale-110`}
        />
      </button>
      <button
        onMouseOver={() => changeTitle("BitBucket")}
        onMouseOut={() => changeTitle("collaboration tools")}
      >
        <SkillsBitbucket
          style={`m-3 shadow-sm transition transform duration-300 hover:scale-110`}
        />
      </button>
      <button
        onMouseOver={() => changeTitle("Trello")}
        onMouseOut={() => changeTitle("collaboration tools")}
      >
        <SkillsTrello
          style={`m-3 shadow-sm transition transform duration-300 hover:scale-110`}
        />
      </button>
    </div>
  );
}
