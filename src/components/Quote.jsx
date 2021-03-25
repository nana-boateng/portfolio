// import axios from "axios";
// import { useState } from "react";

export default function Quote() {
  const quote = {
    text: "Beauty is not in the face; beauty is a light in the heart.",
    author: "Kahlil Gibran",
  };

  return (
    <div className="text-center text-black">
      <div>{quote.text}</div>
      <div>{quote.author}</div>
    </div>
  );
}
