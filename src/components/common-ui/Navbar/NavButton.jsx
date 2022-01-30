import React from "react";

export default function NavButton({ nav }) {
  const style =
    "font-quick hover:scale-125 hover:font-bold duration-75 text-2xl peer-hover:scale-100 p-2 m-2 bg-transparent";
  return (
    <div>
      {(() => {
        switch (nav) {
          case "home":
            return <button className={style}>home</button>;
          case "projects":
            return <button className={style}>projects</button>;
          case "timeline":
            return <button className={style}>timeline</button>;
          case "code":
            return <button className={style}>code</button>;
          case "contact":
            return <button className={style}>contact</button>;
          case "connect":
            return <button className={style}>connect</button>;
          default:
            break;
        }
      })()}
    </div>
  );
}
