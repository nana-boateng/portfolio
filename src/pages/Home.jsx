// components
// import Summary from "../components/Summary";
import PageHeader from "./../components/PageHeader";
import Quote from "./../components/Quote";
// import Carousel from "./../components/Carousel";
// import Projects from "./../components/Projects";
import ArrowDown from "./../components/icons/ArrowDown";
import ContactIcons from "./../components/ContactIcons";

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
    <div className="h-screen bg-celeste flex flex-col justify-between">
      <div>
        <ContactIcons />
      </div>

      <div className="mx-auto ">
        <PageHeader title="nana" />
        <div className="flex flex-row text-2xl space-between">
          <div className="animate-fade-in-up mx-3">software developer </div>
          <div>/</div>
          <div className="animate-fade-in-up mx-3">computer scientist</div>
        </div>
      </div>

      <div className="mx-auto my-3">
        <Quote />
        <ArrowDown />
      </div>
      {/* Summary */}
      {/* <Summary /> */}
      {/* Software Carousel  */}
      {/* <Carousel /> */}
      {/* Project Cards  */}
      {/* <Projects projects={projects} /> */}
    </div>
  );
}
