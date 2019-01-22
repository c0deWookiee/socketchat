import React, { Component } from "react";
import "index.scss";

export default class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.makeRoom()}>Create Room</button>
      </div>
    );
  }
}
