import Nav from "../components/Nav";
import NavItem from "../components/NavItem";
import Carousel from "../components/skills/Carousel";

export default function Skills() {
  return (
    <div className="h-screen bg-pink flex flex-col justify-between items-center">
      <Nav style={`text-xl font-bold`}>
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

      <div>
        <Carousel />
      </div>
      <div>Footer</div>
    </div>
  );
}
