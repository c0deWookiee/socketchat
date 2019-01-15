import React from "react";
import messages from "./Messages.jsx";
import "index.scss";

export default function DirectMessage(props) {
  return (
    <div>
      <div className="messageBox">DM's Go Here!</div>
      {props.directMessageLog.map((message, index) => {
        <Messages
          message={message.message}
          key={index}
          username={message.username}
          client={props.client}
        />;
      })}
    </div>
  );
}
