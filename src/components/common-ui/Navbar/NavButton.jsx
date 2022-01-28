import React from "react";

export default function NavButton({ nav }) {
  return (
    <div>
      {(() => {
        switch (nav) {
          case "home":
            return <button className="bg-transparent">home</button>;
          case "projects":
            return <button className="bg-transparent">projects</button>;
          case "timeline":
            return <button className="bg-transparent">timeline</button>;
          case "code":
            return <button className="bg-transparent">code</button>;
          case "contact":
            return <button className="bg-transparent">contact</button>;
          case "connect":
            return <button className="bg-transparent">connect</button>;
          default:
            break;
        }
      })()}
    </div>
  );
}
