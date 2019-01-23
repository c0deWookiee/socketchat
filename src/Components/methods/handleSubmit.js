export default function(e) {
  const { room, username, text } = this.state;
  e.preventDefault();

  if (this.state.text) {
    if (!this.state.directMessage) {
      this.setState(prevState => {
        let newState = prevState.chatLog;
        newState.push({
          username: username,
          message: text,
          room: room
        });
        return { chatLog: newState };
      });
    } else {
      this.setState(prevState => {
        let newState = prevState.directMessageLog;
        newState.push({
          username: username,
          message: text
        });
        return { directMessageLog: newState };
      });
    }

    if (!this.state.directMessage) {
      this.socket.emit("click", room, {
        username: username,
        message: text,
        room: room
      });
    } else {
      this.socket.emit("dmMessage", this.state.socketNum, {
        username: username,
        message: text
      });
    }
  }

  this.setState({ text: "" });
  // this.scrollToBottom();
}
