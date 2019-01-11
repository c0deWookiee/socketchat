import React, { Component } from "react";
import "index.scss";
const Messages = props => {
  return (
    <div id="messages">
      <p>{props.message}</p>
    </div>
  );
};

export default Messages;
