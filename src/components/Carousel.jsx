export default function Carousel({}) {
  const skills = ["Git", "Jira", "Bitbucket", "GitHub", "Nodejs"];

  return <div>{skills.map((skill) => console.log(skill))}</div>;
}
