const simpleIcons = require("simple-icons");

export default function Specialities() {
  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "Jira",
    "Bitbucket ",
  ];
  function getIcons() {
    const allIcons = [];
    for (const title in simpleIcons) {
      const icon = simpleIcons.get(title);
      allIcons.push(icon);
    }
    return allIcons;
  }

  return <div className="my-5 w-10 bg-"></div>;
}
