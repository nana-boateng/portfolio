import { Link } from "react-router-dom";

// components
import Nav from "./../components/Nav";
// import Summary from "../components/Summary";
import PageHeader from "./../components/home/PageHeader";
import Quote from "../components/home/Quote";
// import Carousel from "./../components/Carousel";
// import Projects from "./../components/Projects";
import { ArrowDown } from "./../components/icons/";
import NavItem from "../components/NavItem";
import { Code, Connect, Contact } from "../components/home";

export default function Home() {
  // create projects object with title and description
  // const projects = {
  //   ".dotfiles": {
  //     title: ".dotfiles",
  //     description: "My dotfiles that I take with me everywhere.",
  //     stack: ["Lua", "Bash"],
  //   },
  //   "glass-o-milk": {
  //     title: "Glass of Milk",
  //     description:
  //       "A web app to help you make healthier eating choices by providing healthy meals you can make with items in your fridge.",
  //     stack: ["CSS3", "React", "Strapi", "Docker", "Kubernetes"],
  //   },
  // };

  return (
    <div className="h-screen bg-celeste flex flex-col justify-between">
      <Nav style={`text-xl m-3 h-6`}>
        <NavItem>
          <Code />
        </NavItem>
        <NavItem>
          <Contact />
        </NavItem>
        <NavItem>
          <Connect />
        </NavItem>
      </Nav>

      <div className="mx-auto ">
        <PageHeader />
      </div>

      <div className="mx-auto my-3">
        <Quote />
        <Link to="/skills">
          <ArrowDown animation="animate-bounce" />
        </Link>
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
