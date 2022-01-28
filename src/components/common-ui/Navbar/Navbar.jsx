import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-between w-full p-4 sm: md: lg:flex-row xl:flex-row ">
      <NavbarItem item={"contact"} />
      <NavbarItem item={"nav"} />
    </div>
  );
}
