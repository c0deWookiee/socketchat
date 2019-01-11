import React, { Component } from "react";
import "index.scss";
class Messages extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="messages">
        <div
          className={
            this.props.username === this.props.client ? "right" : "left"
          }
        >
          <p>{this.props.username}</p>
          <h3>{this.props.message}</h3>
        </div>
      </div>
    );
  }
}

export default Messages;
