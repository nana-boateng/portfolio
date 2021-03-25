import React from "react";

export default function Card({ header, content }) {
  return (
    <div className="border h-24 w-24">
      <div>{header}</div>
      <div>{content}</div>
    </div>
  );
}
