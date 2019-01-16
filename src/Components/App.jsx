import React, { Component } from "react";
import "../index.scss";
import io from "socket.io-client";
import Messages from "./Messages.jsx";
import Form from "./Form.jsx";
import Rooms from "./Rooms.jsx";
import CreateRoom from "./CreateRoom.jsx";
import DirectMessage from "./DirectMessage.jsx";
import Portal from "./Portal.jsx";
import handleSubmit from "./methods/handleSubmit.js";
import makeRoom from "./methods/makeRoom.js";
import roomClick from "./methods/roomClick.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomView: false,
      text: "",
      chatLog: [],
      directMessageLog: [],
      username: null,
      rooms: [
        "lobby",
        "arena",
        "anthony's corner",
        "phamily kitchen",
        "sports"
      ],
      room: "lobby",
      directMessage: false
    };
    this.makeRoom = makeRoom.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.socket = io("localhost:8080");
    this.socket.on("broadcast", (room, message, id) => {
      this.setState(prevState => {
        let newState = prevState.chatLog;
        message.id = id;
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
      }
      // () => {
      // console.log("UN", this.state.username);
      // console.log("room", this.state.room);
      // }
    );
  }
  roomToggle = () => {
    this.setState(prevState => {
      return { roomView: !prevState.roomView };
    });
  };
  messageUser = id => {
    // this.socket.emit("privateMessage", `${id}`);
    this.setState(prevState => {
      return { directMessage: !prevState.directMessage };
    });
  };

  // roomClick = e => {
  //   let newRoom = e.target.innerHTML;
  //   e.preventDefault();
  //   this.setState(
  //     _ => {
  //       //here we utilize async nature of setstate and only emit to the server after we've joined the room
  //       return { room: newRoom, directMessage: false };
  //     },
  //     _ => {
  //       this.socket.emit("roomClick", this.state.room);
  //     }
  //   );
  // };

  handleChange = e => {
    //eventually will emit the user that is typing
    this.socket.emit("typing");
    this.setState({ text: e.target.value });
  };

  render() {
    const roomPortal = this.state.roomView ? (
      <Portal>
        <Rooms rooms={this.state.rooms} />
      </Portal>
    ) : (
      <button onClick={this.roomToggle}>Show Rooms</button>
    );
    return this.state.username === null ? (
      <div />
    ) : (
      <div>
        {roomPortal}
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
                socketId={message.id}
                privateMessage={this.messageUser}
              />
            );
          })}
        {/* {this.state.rooms.map((room, index) => {
          return <Rooms room={room} index={index} roomClick={this.roomClick} />;
        })} */}
        <CreateRoom makeRoom={this.makeRoom} />
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          text={this.state.text}
        />
      </div>
    );
  }
}
