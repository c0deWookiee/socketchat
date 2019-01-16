export default async function() {
  let roomPrompt = await prompt("what room would you like to join");
  let pwPrompt = await prompt("create password");
  this.setState(
    prevState => {
      let addedRoom = prevState.rooms;
      addedRoom.push(roomPrompt);
      this.socket.emit("pwCheck", pwPrompt);
      return { rooms: addedRoom, room: roomPrompt };
    },
    () => {
      console.log("ROOMS", this.state.rooms);
      this.socket.emit("roomClick", this.state.room);
    }
  );
}
