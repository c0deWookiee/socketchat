import React from "react";
import Messages from "./Messages.jsx";

export default function(props) {
  if (props.chatLog) {
  }
  return (
    <div className="message-log">
      {(props.private
        ? props.chatLog.filter(room => room.room === props.currRoom)
        : props.chatLog
      ) //filter messages when rendering private messages
        .map((item, index) => {
          return (
            <div
              className={
                item.username === props.client
                  ? "right-message"
                  : "left-message"
              }
            >
              <Messages
                message={item.message}
                key={index}
                username={item.username}
                client={props.client}
                room={item.room}
                Id={item.id}
                privateMessage={props.privateMessage}
              />
            </div>
          );
        })}
    </div>
  );
}
