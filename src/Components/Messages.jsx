import React from "react";
import DirectMessage from "./DirectMessage.jsx";
import "../index.scss";

export default function Messages(props) {
  return (
    <div className="messages">
      <div
        className={props.username === props.client ? "right" : "left"}
        onClick={() => props.privateMessage(props.id)}
      >
        <p>{props.username}</p>
        <h3>{props.message}</h3>
        <p>{props.room}</p>
      </div>
    </div>
  );
}
