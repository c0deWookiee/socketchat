import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <ul id="messages" />
        <form action="">
          <input id="m" autoComplete="off" />
          <button>Send</button>
        </form>
      </div>
    );
  }
}
