import React from "react";
import "../index.scss";

export default function Rooms(props) {
  return (
    <div className="roomWrapper">
      <div className="roomBox">
        {/* <p onClick={e => props.roomClick(e)}>{props.room}</p> */}
        {props.rooms.map((room, index) => {
          return <h3 className="roomList"> {room}</h3>;
        })}
      </div>
    </div>
  );
}
