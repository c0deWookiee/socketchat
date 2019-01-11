import React from "react";
import "../index.scss";

export default function Messages(props) {
  return (
    <div className="messages">
      <div className={props.username === props.client ? "right" : "left"}>
        <p>{props.username}</p>
        <h3>{props.message}</h3>
        <p>{props.room}</p>
      </div>
    </div>
  );
}
