import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.scss";
import io from "socket.io-client";
import Messages from "./Messages.jsx";
import Form from "./Form.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      chatLog: [],
      username: null,
      rooms: ["lobby", "arena", "anthony's corner"],
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
    let promptRoom = prompt("what is your room");
    this.setState(
      prevState => {
        return { username: promptVal, room: promptRoom };
      },
      () => {
        console.log("UN", this.state.username);
        console.log("room", this.state.room);
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
        {this.state.chatLog
          .filter(item => {
            if (this.state.room === item.room) {
              return item;
            }
          })
          .map((message, index) => {
            return (
              <Messages
                message={message.message}
                key={index}
                username={message.username}
                client={this.state.username}
                room={message.room}
              />
            );
          })}
        <div className="roomList">
          {this.state.rooms.map((room, index) => {
            return <div className="right">{room}</div>;
          })}
        </div>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
