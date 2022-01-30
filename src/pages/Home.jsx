import React from "react";
import Header from "../components/common-ui/Header";
import Navbar from "../components/common-ui/Navbar/Navbar";
import NextPage from "../components/common-ui/NextPage";
import Quote from "../components/common-ui/Quote";
import Shortcuts from "../components/common-ui/Shortcuts";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen bg-spray-500">
      <nav>
        <Navbar />
      </nav>
      <div>
        <Header />
      </div>
      <div className="mx-auto ">
        <Shortcuts />
      </div>
      <div className="flex flex-col justify-between p-2 mx-auto my-2">
        <Quote />
        <NextPage />
      </div>
      {/* Quote  */}
      {/* Project shortcut  */}
      {/* more */}
    </div>
  );
}
