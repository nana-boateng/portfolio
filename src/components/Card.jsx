import React from "react";

export default function Card({ header, content }) {
  return (
    <div className="group border w-max border-indigo-500">
      <div>{header}</div>
      <div>{content}</div>
    </div>
  );
}
