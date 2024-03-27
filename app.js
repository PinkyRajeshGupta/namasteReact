import React from "react";
import ReactDOM from "react-dom/client";

//React Element (React.createElement=>object =>htmlelement(render))
const heading = React.createElement("h1", { id: "header" }, "React element");
//jsx
const jsxHeading = <h1 id="header">Namaste React</h1>;

const Title = () => <h1>Title component</h1>;
//react functional Component

const HeadingComponent = () => (
  <div>
    <Title />

    {jsxHeading}
    <h1 className="header" id="header">
      React functional component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
