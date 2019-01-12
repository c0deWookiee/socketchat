import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.scss";
import io from "socket.io-client";
import Messages from "./Messages.jsx";
import Form from "./Form.jsx";
import Rooms from "./Rooms.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      chatLog: [],
      username: null,
      rooms: [
        "lobby",
        "arena",
        "anthony's corner",
        "phamily kitchen",
        "sports"
      ],
      room: "lobby"
    };
    this.socket = io("localhost:8080");
    this.socket.on("broadcast", (room, message) => {
      this.setState(prevState => {
        let newState = prevState.chatLog;
        console.log("chatlog,", this.state.chatLog);
        console.log("room", room, "message", message);
        newState.push(message);
        return { chatLog: newState };
      });
    });
  }

  componentDidMount() {
    let promptVal = prompt("what is your name");
    // let promptRoom = prompt("what is your room");
    this.setState(
      prevState => {
        return { username: promptVal };
      },
      () => {
        console.log("UN", this.state.username);
        console.log("room", this.state.room);
      }
    );
  }
  roomClick = e => {
    let newRoom = e.target.innerHTML;
    e.preventDefault();
    this.setState(
      prevState => {
        return { room: newRoom };
      },
      () => {
        this.socket.emit("roomClick", this.state.room);
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text.length > 0) {
      this.socket.emit("click", this.state.room, {
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

  // clearLog = () => {
  //   if (this.state.room === )
  // }

  render() {
    return this.state.username === null ? (
      <div />
    ) : (
      <div>
        {this.state.chatLog
          .filter(item => item.room === this.state.room)
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
        {this.state.rooms.map((room, index) => {
          return <Rooms room={room} index={index} roomClick={this.roomClick} />;
        })}
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          text={this.state.text}
        />
      </div>
    );
  }
}
