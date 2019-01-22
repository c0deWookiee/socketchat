import React from "react";
import DirectMessage from "./DirectMessage.jsx";
import "../index.scss";

export default function Messages(props) {
  const showUsername = () => {
    if (props.username === props.client) {
      return <div />;
    } else {
      return (
        <p onClick={() => props.privateMessage(props.id)} className="username">
          {props.username}
        </p>
      );
    }
  };
  return (
    <div className="feed">
      <div className={props.username === props.client ? "right" : "left"}>
        {showUsername}
        <h3 div className="message">
          {props.message}
        </h3>
        <p className="room-message">{props.room}</p>
      </div>
    </div>
  );
}
