import React from "react";

export default function Rooms(props) {
  return (
    <div>
      <p onClick={e => props.roomClick(e)}>{props.room}</p>
    </div>
  );
}
