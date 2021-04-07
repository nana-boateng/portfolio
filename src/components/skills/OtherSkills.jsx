import Proficiency from "./Proficiency";
import Familiarity from "./Familiarity";
import Learning from "./Learning";

export default function OtherSkills() {
  return (
    <div className="flex flex-col my-8 justify-evenly h-full mx-auto">
      <Proficiency />
      <Familiarity />
      <Learning />
    </div>
  );
}
