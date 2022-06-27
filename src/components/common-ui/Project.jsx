import React from "react";
import Card from "./Card";

export default function Project({
  alt,
  title,
  description,
  link,
  photo,
  shortcut,
}) {
  //   if (shortcut) {
  //     return;
  // }

  if (shortcut) {
    return (
      <>
        <div className="flex flex-row mb-4">
          <img
            src={photo}
            alt={alt}
            className="my-auto rounded-full w-9 h-9 lg:w-10 xl:w-10 lg:h-10 xl:h-10"
          />
          <div className="font-bold text-md lg:text-lg xl:text-lg">{title}</div>
        </div>
        <div className="text-sm italic">{description}</div>
      </>
    );
  } else {
    return (
      <Card>
        {title}
        {description}
        {link}
        {photo}
      </Card>
    );
  }
}
