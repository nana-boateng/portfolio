import React from "react";

export default function NavButton({ nav }) {
  const style =
    "font-quick group hover:scale-105 hover:-translate-y-4 hover:font-bold duration-100 text-2xl peer-hover:duration-75 peer-hover:scale-95 p-2 m-2 bg-transparent";
  const imageStyle =
    "invisible w-8 h-8 mx-auto duration-75 group-hover:visible animate-fade-in-up";
  return (
    <div>
      {(() => {
        switch (nav) {
          case "home":
            return (
              <button className={style}>
                home
                <></>
                <img
                  className={imageStyle}
                  src="https://img.icons8.com/dotty/80/000000/home-page.png"
                />
              </button>
            );
          case "projects":
            return (
              <button className={style}>
                projects
                <img
                  className={imageStyle}
                  src="https://img.icons8.com/wired/64/000000/group-of-projects.png"
                />
              </button>
            );
          case "timeline":
            return (
              <button className={style}>
                timeline
                <img
                  className={imageStyle}
                  src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-timeline-business-and-management-kiranshastry-lineal-kiranshastry.png"
                />
              </button>
            );
          case "code":
            return (
              <button className={style}>
                code
                <img
                  className={imageStyle}
                  src="https://img.icons8.com/ios/50/000000/github--v2.png"
                />
              </button>
            );
          case "contact":
            return (
              <button className={style}>
                contact
                <img
                  className={imageStyle}
                  src="https://img.icons8.com/dotty/80/000000/gmail-login.png"
                />
              </button>
            );
          case "connect":
            return (
              <button className={style}>
                connect
                <img
                  className={imageStyle}
                  src="https://img.icons8.com/dotty/80/000000/linkedin.png"
                />
              </button>
            );
          default:
            break;
        }
      })()}
    </div>
  );
}
