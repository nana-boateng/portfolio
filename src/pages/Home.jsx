// components
import Summary from "../components/Summary";
import PageHeader from "./../components/PageHeader";
import Quote from "./../components/Quote";
import Carousel from "./../components/Carousel";
import Projects from "./../components/Projects";

export default function Home() {
  // create projects object with title and description
  const projects = {
    title: ".dotfiles",
    description: "My dotfiles",
  };
  return (
    <div className="h-screen bg-indigo-300 flex flex-col justify-center">
      {/*Name*/}
      <PageHeader title="nana." />
      {/* Quote  */}
      <Quote />
      {/* Summary */}
      <Summary />
      {/* Software Carousel  */}
      <Carousel />
      {/* Project Cards  */}
      <Projects projects={projects} />
    </div>
  );
}
