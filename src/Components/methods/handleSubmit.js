export default function(e) {
  const { room, username, text } = this.state;
  e.preventDefault();
  if (this.state.text.length) {
    this.setState(prevState => {
      let newState = prevState.chatLog;
      newState.push({
        username: username,
        message: text,
        room: room
      });
      return { chatLog: newState };
    });
    if (!this.state.directMessage) {
      this.socket.emit("click", room, {
        username: username,
        message: text,
        room: room
      });
    } else {
      this.socket.emit("dmMessage", {
        username: username,
        message: text
      });
    }
  }

  this.setState({ text: "" });
}
