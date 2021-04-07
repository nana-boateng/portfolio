import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import NavItem from "../components/NavItem";
import Carousel from "../components/skills/Carousel";
import OtherSkills from "../components/skills/OtherSkills";

export default function Skills() {
  return (
    <div className="h-screen bg-pink flex flex-col justify-between items-center">
      <Nav style={`text-xl font-bold my-4`}>
        <NavItem>
          <div>skills</div>
        </NavItem>
        <NavItem>
          <div>projects</div>
        </NavItem>
        <NavItem>
          <div>timeline</div>
        </NavItem>
      </Nav>

      <div className="flex flex-col h-full my-4 justify-between">
        <Carousel />
        <OtherSkills />
      </div>
      <Link to="/">who is nana?</Link>
    </div>
  );
}
