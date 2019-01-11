import React, { Component } from "react";
import { render } from "react-dom";
import App from "./Components/App.jsx";
socket.on("broadcoast", () => {
  console.log("broadcast recieved");
});

render(<App chatLog />, document.getElementById("root"));
