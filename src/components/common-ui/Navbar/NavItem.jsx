import React from "react";
import Separator from "./Separator";
import NavButton from "./NavButton";

export default function NavItem({ item }) {
  return (
    <div>
      {item === "nav" ? (
        <div className="">
          <div className="px-2 py-4 text-xl lg:hidden xl:hidden">nav</div>
          <div className="hidden text-xl md:flex lg:flex ">
            <NavButton nav={"home"} />
            <Separator />
            <NavButton nav={"projects"} />
            <Separator />
            <NavButton nav={"timeline"} />
          </div>
        </div>
      ) : (
        <div>
          <div className="px-2 py-4 text-xl lg:hidden">connect</div>
          <div className="hidden text-xl md:flex lg:flex ">
            <NavButton nav={"code"} />
            <Separator />
            <NavButton nav={"contact"} />
            <Separator />
            <NavButton nav={"connect"} />
          </div>
        </div>
      )}
    </div>
  );
}
