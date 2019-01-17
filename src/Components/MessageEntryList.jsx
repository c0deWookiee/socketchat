import React from "react";
import Messages from "./Messages.jsx";

export default function(props) {
  if (props.chatLog) {
  }
  return (
    <div>
      {(props.private
        ? props.chatLog.filter(room => room.room === props.currRoom)
        : props.chatLog
      ) //filter messages when rendering private messages
        .map((item, index) => {
          return (
            <Messages
              message={item.message}
              key={index}
              username={item.username}
              client={props.client}
              room={item.room}
              Id={item.id}
              privateMessage={props.privateMessage}
            />
          );
        })}
    </div>
  );
}
