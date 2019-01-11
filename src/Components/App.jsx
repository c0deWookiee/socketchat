import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.scss";
import io from "socket.io-client";
import axios from "axios";
import Messages from "./Messages.jsx";
const flag = 1;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      chatLog: []
    };
  }
  //componentDidUpdate(prevProps, prevState, snapshot)

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.chatLog.length > this.state.chatLog.length) {
      this.setState({
        chatLog: prevProps.chatLog
      });
    }
    console.log(`CHATLOG: ${this.state.chatLog}`);
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text.length > 0) {
      socket.emit("click", `${this.state.text}`);
      this.setState((prevState, prevProps) => {
        let newState = prevState.chatLog;
        newState.push(this.state.text);
        return { chatLog: newState };
      });
    }
    this.setState({ text: "" });
  };

  handleChange = e => {
    //eventually will emit the user that is typing
    socket.emit("typing");
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        {this.state.chatLog.map((item, index) => {
          return <Messages message={item} key={index} />;
        })}
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
