import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.scss";
import io from "socket.io-client";
import Messages from "./Messages.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      chatLog: [],
      username: null,
      rooms: [],
      room: "lobby"
    };
    this.socket = io("localhost:8080");
    this.socket.on("broadcast", message => {
      this.setState(prevState => {
        let newState = prevState.chatLog;
        newState.push(message);
        return { chatLog: newState };
      });
    });
  }

  componentDidMount() {
    let promptVal = prompt("what is your name");
    this.setState(
      prevState => {
        return { username: promptVal };
      },
      () => {
        console.log(this.state.username);
      }
    );
  }

  handleLogin = () => {
    // let promptVal = prompt('what is your name')
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text.length > 0) {
      this.socket.emit("click", {
        username: this.state.username,
        message: this.state.text,
        room: this.state.room
      });
    }
    this.setState({ text: "" });
  };

  handleChange = e => {
    //eventually will emit the user that is typing
    this.socket.emit("typing");
    this.setState({ text: e.target.value });
  };

  render() {
    return this.state.username === null ? (
      <div />
    ) : (
      <div>
        {this.state.chatLog.filter((item, index) => {
          if (this.state.room === item.room) {
            return (
              <Messages
                message={item.message}
                key={index}
                username={item.username}
                client={this.state.username}
                room={item.room}
              />
            );
          }
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
