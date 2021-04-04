// components
import Summary from "../components/Summary";
import PageHeader from "./../components/PageHeader";
import Quote from "./../components/Quote";
import Carousel from "./../components/Carousel";
import Projects from "./../components/Projects";

export default function Home() {
  // create projects object with title and description
  const projects = {
    ".dotfiles": {
      title: ".dotfiles",
      description: "My dotfiles that I take with me everywhere.",
      stack: ["Lua", "Bash"],
    },
    "glass-o-milk": {
      title: "Glass of Milk",
      description:
        "A web app to help you make healthier eating choices by providing healthy meals you can make with items in your fridge.",
      stack: ["CSS3", "React", "Strapi", "Docker", "Kubernetes"],
    },
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
