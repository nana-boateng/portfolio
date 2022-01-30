import React from "react";

export default function Card({ colour = "bg-white", style, link, ...props }) {
  return (
    <button href={link} className={`p-4 rounded-md ${colour} ${style}`}>
      {props.children}
    </button>
  );
}
