import React from "react";
import DirectMessage from "./DirectMessage.jsx";
import "../index.scss";

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
<<<<<<< HEAD
    <div className="messages">
      <div className={props.username === props.client ? "right" : "left"}>
        <p onClick={() => props.privateMessage(props.id)}>{props.username}</p>
        <h3 className="text">{props.message}</h3>
        <p>{props.room}</p>
=======
    <div className="message">
      <div>
        {showUsername}
        <h3 div className="message-text">
          {props.message}
        </h3>
        <p className="room-message">{props.room}</p>
>>>>>>> f70f9aed1120021d6e5d900d2e360cb2dcdc1202
      </div>
    </div>
  );
}
