import ReactHtmlParser from "react-html-parser";
const simpleIcons = require("simple-icons");

export function getIcons(name) {
  return simpleIcons[name] ? ReactHtmlParser(simpleIcons[name].svg) : null;
}
