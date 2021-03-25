import Card from "./Card";

export default function Projects({ projects }) {
  const header = projects.title;
  const content = projects.description;

  return (
    <div className={`mx-auto my-4`}>
      <Card header={header} content={content} />
    </div>
  );
}
