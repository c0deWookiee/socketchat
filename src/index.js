import React, { Component } from "react";
import { render } from "react-dom";
import App from "./Components/App.jsx";

console.log(location.pathname)
render(<App pathname={location.pathname}/>, document.getElementById("root"));
