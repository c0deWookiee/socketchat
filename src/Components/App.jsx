import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.scss";
import io from "socket.io-client";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text.length > 0) {
      socket.emit("click", `this is the message => ${this.state.text}`);
    }
    this.setState({ text: "" });
  };

  handleChange = e => {
    socket.emit("typing");
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        <ul id="messages" />
        <form action="">
          <input
            id="m"
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button onClick={e => this.handleSubmit(e)}>Send</button>
        </form>
      </div>
    );
  }
}
