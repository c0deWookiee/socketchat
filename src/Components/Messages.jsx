import React, { Component } from "react";
import "index.scss";
class Messages extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="messages">
        <div>
          <p>{props.username}</p>
          <h3>{props.message}</h3>
        </div>
      </div>
    );
  }
}

export default Messages;
