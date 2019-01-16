import React from "react";
import Messages from "./Messages.jsx";

export default function(props) {
  return (
    <div>
      {props.chatLog
        .filter(room => room.room === props.currRoom)
        .map((item, index) => {
          return (
            <Messages
              message={item.message}
              key={index}
              username={item.username}
              client={props.username}
              room={item.room}
              socketId={item.id}
              privateMessage={props.privateMessage}
            />
          );
        })}
    </div>
  );
}
