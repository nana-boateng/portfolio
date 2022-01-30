import React from "react";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <div className="flex justify-between w-full p-4 sm: md: lg:flex-row xl:flex-row ">
      <NavItem item={"contact"} />
      <NavItem item={"nav"} />
    </div>
  );
}
