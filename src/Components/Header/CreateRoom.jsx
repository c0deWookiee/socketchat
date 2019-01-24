import React, { Component } from "react";
import "./header.scss";

export default class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <button className="createRoom-btn" onClick={() => this.props.makeRoom()}>
        Create Room
      </button>
    );
  }
}
