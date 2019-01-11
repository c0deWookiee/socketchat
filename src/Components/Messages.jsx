import React, { Component } from "react";
import "index.scss";
const Messages = props => {
    //we need to make this a stateful and pass through whether it is a client or this.state.username for CSS alternating
  return (
    <div className="messages">
      <div className={}>
        <p>{props.username}</p>
        <h3>{props.message}</h3>
      </div>
    </div>
  );
};

export default Messages;
