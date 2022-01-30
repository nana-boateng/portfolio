import React from "react";
import Card from "./Card";
import Project from "./Project";

export default function Shortcuts() {
  const testTitle = "QBay - EBay for Queen's Students";
  const testLink =
    "https://login.docker.com/u/login/identifier?state=hKFo2SB0S0l2SlpWOXpDbktoVzV4Unl4WXhiZ1dndFVTNFMxdaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEpKSExFcEY2a2pXdHU1TzNTNHBHcDNUaVdZbW1WaHFoo2NpZNkgbHZlOUdHbDhKdFNVcm5lUTFFVnVDMGxiakhkaTluYjk";
  const testDescription =
    "Used Python and Flask with MySQL to create a backend system for customer-to-customer e-commerce platform.";
  const testPhoto =
    "https://images.unsplash.com/photo-1642866737821-532bc817c068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

  return (
    <div className="flex flex-row ">
      <Card
        colour="bg-bone-600"
        style={`mx-4 w-56 h-48 shadow-md lg:hover:scale-105 duration-100 lg:w-64 xl:w-64`}
      >
        <Project
          description={testDescription}
          link={testLink}
          photo={testPhoto}
          title={testTitle}
          shortcut
        />
      </Card>
      <Card
        colour="bg-bone-600"
        style={`hidden mx-4 w-56 h-48 shadow-md lg:flex lg:flex-col xl:flex xl:flex-col lg:hover:scale-105 duration-100 lg:w-64 xl:w-64`}
      >
        <Project
          description={testDescription}
          link={testLink}
          photo={testPhoto}
          title={testTitle}
          shortcut
        />
      </Card>
      <Card
        colour="bg-bone-600"
        style={`hidden mx-4 w-56 h-48 shadow-md lg:flex lg:flex-col xl:flex xl:flex-col lg:hover:scale-105 duration-100 lg:w-64 xl:w-64`}
      >
        <Project
          description={testDescription}
          link={testLink}
          photo={testPhoto}
          title={testTitle}
          shortcut
        />
      </Card>
    </div>
  );
}
