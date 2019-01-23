import React from "react";
import DirectMessage from "../DirectMessage.jsx";
import "./Messages.scss";

export default function Messages(props) {
  let showUsername =
    props.username === props.client ? (
      <div />
    ) : (
      <p onClick={() => props.privateMessage(props.id)} className="username">
        {props.username}
      </p>
    );

  return (
    <div className="message">
      <div>
        {showUsername}
        <h3 div className="message-text">
          {props.message}
        </h3>
        <p className="room-message">{props.room}</p>
      </div>
    </div>
  );
}
