import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";

const PropsDemo = props => {
  return <Profile name="Farrukh" Age="24" Country="Pakistan" />;
};

ReactDOM.render(<PropsDemo />, document.getElementById("root"));
