import React, { Component } from "react";
import { render } from "react-dom";
import App from "./Components/App.jsx";
import socketIO from "socket.io-client";
let data = [];
render(<App chatLog={data} />, document.getElementById("root"));

//making sweet sweet sardines

socket.on("broadcast", newData => {
  console.log("broadcasted message=>", newData);
  data.push(newData);
  render(<App chatLog={data} />, document.getElementById("root"));
});
