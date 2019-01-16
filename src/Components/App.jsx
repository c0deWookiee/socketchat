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
import MessageEntryList from "./MessageEntryList.jsx";

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
    this.roomClick = roomClick.bind(this);
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
    this.setState(prevState => {
      return { username: promptVal };
    });
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

  handleChange = e => {
    this.socket.emit("typing");
    this.setState({ text: e.target.value });
  };

  render() {
    const roomPortal = this.state.roomView ? (
      <Portal portal="roomPortal">
        <Rooms rooms={this.state.rooms} roomClick={this.roomClick} />
      </Portal>
    ) : (
      <button onClick={this.roomToggle}>Show Rooms</button>
    );

    const dmView = this.state.directMessage ? (
      <Portal portal="chatPortal">
        <ChatWindow />
      </Portal>
    ) : (
      <div />
    );
    return this.state.username === null ? (
      <div />
    ) : (
      <div>
        {roomPortal}
        <MessageEntryList
          chatLog={this.state.chatLog}
          client={this.state.username}
          privateMessage={this.messageUser}
          currRoom={this.state.room}
        />
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
