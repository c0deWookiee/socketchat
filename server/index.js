const express = require("express");
const app = express();
const parser = require("body-parser");
const path = require("path");

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/../build"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../build/index.html"));
// });

const Server = require("http").Server(app);
Server.listen(8080, () => console.log("<=====LISTENING ON PORT 8080====>"));

const io = require("socket.io")(Server);
io.on("connection", socket => {
  console.log("<===A USER CONNECTED===>", socket.id);
  socket.join("Lobby");

  socket.on("click", (room, data) => {
    //would only submit data to the socket in the previously stated room
    console.log("ROOM", room);
    console.log("message:", data);

    socket.to(room).emit("broadcast", room, data, socket.id);

    socket.on("dmMessage", (id, data) => {
      console.log("dm data =>", data);
      io.to(id).emit("privateBroadcast", data);
    });
  });

  //doesnt exist yet
  socket.on("roomClick", (room, password) => {
    //on room create that socket instance would connect ot the room
    console.log("ROOM", room);
    if (password) {
      socket.emit("pwCheck", data);
    }
    socket.join(room); //https://socket.io/docs/server-api/#socket-handshake
  });

  socket.on("typing", socket => {
    console.log("a user is typing");
  });

  socket.on("sendMessage", message => {
    io.emit("receivedMessage", message);
    console.log("message was emitted");
  });

  socket.on("disconnect", () => {
    console.log("===>A USER DISCONNECTED<===");
  });
});
