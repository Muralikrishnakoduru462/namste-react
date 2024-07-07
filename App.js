import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hii murali"),
    React.createElement("h2", {}, "hii krishna"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hii murali"),
    React.createElement("h2", {}, "hii krishna"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from react"
// );

// console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
