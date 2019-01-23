import React from "react";
import MessageEntryList from "./Messages/MessageEntryList.jsx";

export default function ChatWindow(props) {
  return (
    <div className="chatWindow">
      <MessageEntryList chatLog={props.directMessageLog} />
    </div>
  );
}
