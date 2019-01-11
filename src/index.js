import React, { Component } from "react";
import { render } from "react-dom";
import App from "./Components/App.jsx";
import socketIO from "socket.io-client";

render(<App />, document.getElementById("root"));
