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
    this.setState({
      text: new FormData(e.target)
    });

    socket.emit("click");
  };
  render() {
    return (
      <div>
        <ul id="messages" />
        <form action="">
          <input id="m" autoComplete="off" value={this.state.text} />
          <button onClick={e => this.handleSubmit(e)}>Send</button>
        </form>
      </div>
    );
  }
}
