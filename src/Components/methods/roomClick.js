export default function() {
  let newRoom = e.target.innerHTML;
  e.preventDefault();
  this.setState(
    _ => {
      //here we utilize async nature of setstate and only emit to the server after we've joined the room
      return { room: newRoom, directMessage: false };
    },
    _ => {
      this.socket.emit("roomClick", this.state.room);
    }
  );
}
