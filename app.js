import React from "react";
import ReactDOM from "react-dom/client";

//const header = React.createElement("h1", { id: "header" }, "hi this is h1");
const header2 = React.createElement("div", {}, [
  React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hi this is first div child ")
  ),
  React.createElement("div", {}, "this is second div"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header2);
