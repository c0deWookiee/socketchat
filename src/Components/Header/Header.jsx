import React from "react";
import CreateRoom from "./CreateRoom.jsx";
import "./header.scss";

export default function Header(props) {
  return (
    <div className="header-container">
      <CreateRoom makeRoom={props.makeRoom} />
      <button className="showRoom-btn" onClick={e => props.roomToggle(e)}>
        Show Rooms
      </button>
    </div>
  );
}
