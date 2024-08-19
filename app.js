// const header = React.createElement(
//   "h1",
//   { id: "heading", className: "heading" },
//   "Welcome world from React!"
// );

const parent = React.createElement(
  "div",
  { id: "parent", className: "heading" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm from H1 tag"),
    React.createElement("h2", {}, "I'm from H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm from H1 tag"),
    React.createElement("h2", {}, "I'm from H2 tag"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
